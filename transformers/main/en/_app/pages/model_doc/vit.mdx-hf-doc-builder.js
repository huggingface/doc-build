import{S as tm,i as om,s as am,e as s,k as h,w,t as a,M as nm,c as r,d as t,m,a as i,x as y,h as n,b as c,N as sm,G as e,g as _,y as $,q as x,o as E,B as k,v as rm,L as zo}from"../../chunks/vendor-hf-doc-builder.js";import{T as je}from"../../chunks/Tip-hf-doc-builder.js";import{D as ne}from"../../chunks/Docstring-hf-doc-builder.js";import{C as No}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ct}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as qo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function im(V){let d,T,f,u,v;return u=new No({props:{code:`from transformers import ViTModel, ViTConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function lm(V){let d,T;return{c(){d=s("p"),T=a(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){d=r(f,"P",{});var u=i(d);T=n(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(t)},m(f,u){_(f,d,u),e(d,T)},d(f){f&&t(d)}}}function dm(V){let d,T,f,u,v;return{c(){d=s("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var F=i(f);u=n(F,"Module"),F.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function cm(V){let d,T,f,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function pm(V){let d,T,f,u,v;return{c(){d=s("p"),T=a("Note that we provide a script to pre-train this model on custom data in our "),f=s("a"),u=a(`examples
directory`),v=a("."),this.h()},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Note that we provide a script to pre-train this model on custom data in our "),f=r(p,"A",{href:!0,rel:!0});var F=i(f);u=n(F,`examples
directory`),F.forEach(t),v=n(p,"."),p.forEach(t),this.h()},h(){c(f,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),c(f,"rel","nofollow")},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function hm(V){let d,T,f,u,v;return{c(){d=s("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var F=i(f);u=n(F,"Module"),F.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function mm(V){let d,T,f,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=s("p"),T=a("Examples:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Examples:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function fm(V){let d,T,f,u,v,l,p,F;return{c(){d=s("p"),T=a(`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=s("code"),u=a("interpolate_pos_encoding"),v=a(" to "),l=s("code"),p=a("True"),F=a(` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`)},l(z){d=r(z,"P",{});var C=i(d);T=n(C,`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=r(C,"CODE",{});var q=i(f);u=n(q,"interpolate_pos_encoding"),q.forEach(t),v=n(C," to "),l=r(C,"CODE",{});var D=i(l);p=n(D,"True"),D.forEach(t),F=n(C,` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`),C.forEach(t)},m(z,C){_(z,d,C),e(d,T),e(d,f),e(f,u),e(d,v),e(d,l),e(l,p),e(d,F)},d(z){z&&t(d)}}}function um(V){let d,T,f,u,v;return{c(){d=s("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var F=i(f);u=n(F,"Module"),F.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function gm(V){let d,T,f,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
Egyptian cat`}}),{c(){d=s("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function _m(V){let d,T,f,u,v,l,p,F,z,C,q,D,se,I,Re,Q,He,Ce,U,Ke,re,ie,Je,Pe,X,Ge,Ae,Z,Ee,Xe,ve,A,L,qe,P,le,Ze,H,Qe,Ye,O,ke,de,et,ce,pe,Te,tt,Y,ot,S,at,he,W,nt,N,st,rt;return{c(){d=s("p"),T=a("TensorFlow models and layers in "),f=s("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=h(),p=s("ul"),F=s("li"),z=a("having all inputs as keyword arguments (like PyTorch models), or"),C=h(),q=s("li"),D=a("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),I=s("p"),Re=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),He=a("model.fit()"),Ce=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Ke=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=s("code"),Je=a("fit()"),Pe=a(" and "),X=s("code"),Ge=a("predict()"),Ae=a(`, such as when creating your own layers or models with
the Keras `),Z=s("code"),Ee=a("Functional"),Xe=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=h(),A=s("ul"),L=s("li"),qe=a("a single Tensor with "),P=s("code"),le=a("pixel_values"),Ze=a(" only and nothing else: "),H=s("code"),Qe=a("model(pixel_values)"),Ye=h(),O=s("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s("code"),et=a("model([pixel_values, attention_mask])"),ce=a(" or "),pe=s("code"),Te=a("model([pixel_values, attention_mask, token_type_ids])"),tt=h(),Y=s("li"),ot=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),at=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),he=h(),W=s("p"),nt=a(`Note that when creating models and layers with
`),N=s("a"),st=a("subclassing"),rt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var M=i(d);T=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var ut=i(f);u=n(ut,"transformers"),ut.forEach(t),v=n(M," accept two formats as input:"),M.forEach(t),l=m(b),p=r(b,"UL",{});var ee=i(p);F=r(ee,"LI",{});var gt=i(F);z=n(gt,"having all inputs as keyword arguments (like PyTorch models), or"),gt.forEach(t),C=m(ee),q=r(ee,"LI",{});var _t=i(q);D=n(_t,"having all inputs as a list, tuple or dict in the first positional argument."),_t.forEach(t),ee.forEach(t),se=m(b),I=r(b,"P",{});var j=i(I);Re=n(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var vt=i(Q);He=n(vt,"model.fit()"),vt.forEach(t),Ce=n(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Tt=i(U);Ke=n(Tt,"model.fit()"),Tt.forEach(t),re=n(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=r(j,"CODE",{});var bt=i(ie);Je=n(bt,"fit()"),bt.forEach(t),Pe=n(j," and "),X=r(j,"CODE",{});var me=i(X);Ge=n(me,"predict()"),me.forEach(t),Ae=n(j,`, such as when creating your own layers or models with
the Keras `),Z=r(j,"CODE",{});var wt=i(Z);Ee=n(wt,"Functional"),wt.forEach(t),Xe=n(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ve=m(b),A=r(b,"UL",{});var B=i(A);L=r(B,"LI",{});var fe=i(L);qe=n(fe,"a single Tensor with "),P=r(fe,"CODE",{});var yt=i(P);le=n(yt,"pixel_values"),yt.forEach(t),Ze=n(fe," only and nothing else: "),H=r(fe,"CODE",{});var Fe=i(H);Qe=n(Fe,"model(pixel_values)"),Fe.forEach(t),fe.forEach(t),Ye=m(B),O=r(B,"LI",{});var ue=i(O);ke=n(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var $t=i(de);et=n($t,"model([pixel_values, attention_mask])"),$t.forEach(t),ce=n(ue," or "),pe=r(ue,"CODE",{});var xt=i(pe);Te=n(xt,"model([pixel_values, attention_mask, token_type_ids])"),xt.forEach(t),ue.forEach(t),tt=m(B),Y=r(B,"LI",{});var Ve=i(Y);ot=n(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ve,"CODE",{});var Et=i(S);at=n(Et,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),Et.forEach(t),Ve.forEach(t),B.forEach(t),he=m(b),W=r(b,"P",{});var be=i(W);nt=n(be,`Note that when creating models and layers with
`),N=r(be,"A",{href:!0,rel:!0});var we=i(N);st=n(we,"subclassing"),we.forEach(t),rt=n(be,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),be.forEach(t),this.h()},h(){c(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(N,"rel","nofollow")},m(b,M){_(b,d,M),e(d,T),e(d,f),e(f,u),e(d,v),_(b,l,M),_(b,p,M),e(p,F),e(F,z),e(p,C),e(p,q),e(q,D),_(b,se,M),_(b,I,M),e(I,Re),e(I,Q),e(Q,He),e(I,Ce),e(I,U),e(U,Ke),e(I,re),e(I,ie),e(ie,Je),e(I,Pe),e(I,X),e(X,Ge),e(I,Ae),e(I,Z),e(Z,Ee),e(I,Xe),_(b,ve,M),_(b,A,M),e(A,L),e(L,qe),e(L,P),e(P,le),e(L,Ze),e(L,H),e(H,Qe),e(A,Ye),e(A,O),e(O,ke),e(O,de),e(de,et),e(O,ce),e(O,pe),e(pe,Te),e(A,tt),e(A,Y),e(Y,ot),e(Y,S),e(S,at),_(b,he,M),_(b,W,M),e(W,nt),e(W,N),e(N,st),e(W,rt)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(se),b&&t(I),b&&t(ve),b&&t(A),b&&t(he),b&&t(W)}}}function vm(V){let d,T,f,u,v;return{c(){d=s("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var F=i(f);u=n(F,"Module"),F.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Tm(V){let d,T,f,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=s("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function bm(V){let d,T,f,u,v,l,p,F;return{c(){d=s("p"),T=a(`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=s("code"),u=a("interpolate_pos_encoding"),v=a(" to "),l=s("code"),p=a("True"),F=a(` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`)},l(z){d=r(z,"P",{});var C=i(d);T=n(C,`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=r(C,"CODE",{});var q=i(f);u=n(q,"interpolate_pos_encoding"),q.forEach(t),v=n(C," to "),l=r(C,"CODE",{});var D=i(l);p=n(D,"True"),D.forEach(t),F=n(C,` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`),C.forEach(t)},m(z,C){_(z,d,C),e(d,T),e(d,f),e(f,u),e(d,v),e(d,l),e(l,p),e(d,F)},d(z){z&&t(d)}}}function wm(V){let d,T,f,u,v,l,p,F,z,C,q,D,se,I,Re,Q,He,Ce,U,Ke,re,ie,Je,Pe,X,Ge,Ae,Z,Ee,Xe,ve,A,L,qe,P,le,Ze,H,Qe,Ye,O,ke,de,et,ce,pe,Te,tt,Y,ot,S,at,he,W,nt,N,st,rt;return{c(){d=s("p"),T=a("TensorFlow models and layers in "),f=s("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=h(),p=s("ul"),F=s("li"),z=a("having all inputs as keyword arguments (like PyTorch models), or"),C=h(),q=s("li"),D=a("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),I=s("p"),Re=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=s("code"),He=a("model.fit()"),Ce=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),Ke=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=s("code"),Je=a("fit()"),Pe=a(" and "),X=s("code"),Ge=a("predict()"),Ae=a(`, such as when creating your own layers or models with
the Keras `),Z=s("code"),Ee=a("Functional"),Xe=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=h(),A=s("ul"),L=s("li"),qe=a("a single Tensor with "),P=s("code"),le=a("pixel_values"),Ze=a(" only and nothing else: "),H=s("code"),Qe=a("model(pixel_values)"),Ye=h(),O=s("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s("code"),et=a("model([pixel_values, attention_mask])"),ce=a(" or "),pe=s("code"),Te=a("model([pixel_values, attention_mask, token_type_ids])"),tt=h(),Y=s("li"),ot=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=s("code"),at=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),he=h(),W=s("p"),nt=a(`Note that when creating models and layers with
`),N=s("a"),st=a("subclassing"),rt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var M=i(d);T=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var ut=i(f);u=n(ut,"transformers"),ut.forEach(t),v=n(M," accept two formats as input:"),M.forEach(t),l=m(b),p=r(b,"UL",{});var ee=i(p);F=r(ee,"LI",{});var gt=i(F);z=n(gt,"having all inputs as keyword arguments (like PyTorch models), or"),gt.forEach(t),C=m(ee),q=r(ee,"LI",{});var _t=i(q);D=n(_t,"having all inputs as a list, tuple or dict in the first positional argument."),_t.forEach(t),ee.forEach(t),se=m(b),I=r(b,"P",{});var j=i(I);Re=n(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var vt=i(Q);He=n(vt,"model.fit()"),vt.forEach(t),Ce=n(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Tt=i(U);Ke=n(Tt,"model.fit()"),Tt.forEach(t),re=n(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=r(j,"CODE",{});var bt=i(ie);Je=n(bt,"fit()"),bt.forEach(t),Pe=n(j," and "),X=r(j,"CODE",{});var me=i(X);Ge=n(me,"predict()"),me.forEach(t),Ae=n(j,`, such as when creating your own layers or models with
the Keras `),Z=r(j,"CODE",{});var wt=i(Z);Ee=n(wt,"Functional"),wt.forEach(t),Xe=n(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ve=m(b),A=r(b,"UL",{});var B=i(A);L=r(B,"LI",{});var fe=i(L);qe=n(fe,"a single Tensor with "),P=r(fe,"CODE",{});var yt=i(P);le=n(yt,"pixel_values"),yt.forEach(t),Ze=n(fe," only and nothing else: "),H=r(fe,"CODE",{});var Fe=i(H);Qe=n(Fe,"model(pixel_values)"),Fe.forEach(t),fe.forEach(t),Ye=m(B),O=r(B,"LI",{});var ue=i(O);ke=n(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var $t=i(de);et=n($t,"model([pixel_values, attention_mask])"),$t.forEach(t),ce=n(ue," or "),pe=r(ue,"CODE",{});var xt=i(pe);Te=n(xt,"model([pixel_values, attention_mask, token_type_ids])"),xt.forEach(t),ue.forEach(t),tt=m(B),Y=r(B,"LI",{});var Ve=i(Y);ot=n(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ve,"CODE",{});var Et=i(S);at=n(Et,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),Et.forEach(t),Ve.forEach(t),B.forEach(t),he=m(b),W=r(b,"P",{});var be=i(W);nt=n(be,`Note that when creating models and layers with
`),N=r(be,"A",{href:!0,rel:!0});var we=i(N);st=n(we,"subclassing"),we.forEach(t),rt=n(be,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),be.forEach(t),this.h()},h(){c(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(N,"rel","nofollow")},m(b,M){_(b,d,M),e(d,T),e(d,f),e(f,u),e(d,v),_(b,l,M),_(b,p,M),e(p,F),e(F,z),e(p,C),e(p,q),e(q,D),_(b,se,M),_(b,I,M),e(I,Re),e(I,Q),e(Q,He),e(I,Ce),e(I,U),e(U,Ke),e(I,re),e(I,ie),e(ie,Je),e(I,Pe),e(I,X),e(X,Ge),e(I,Ae),e(I,Z),e(Z,Ee),e(I,Xe),_(b,ve,M),_(b,A,M),e(A,L),e(L,qe),e(L,P),e(P,le),e(L,Ze),e(L,H),e(H,Qe),e(A,Ye),e(A,O),e(O,ke),e(O,de),e(de,et),e(O,ce),e(O,pe),e(pe,Te),e(A,tt),e(A,Y),e(Y,ot),e(Y,S),e(S,at),_(b,he,M),_(b,W,M),e(W,nt),e(W,N),e(N,st),e(W,rt)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(se),b&&t(I),b&&t(ve),b&&t(A),b&&t(he),b&&t(W)}}}function ym(V){let d,T,f,u,v;return{c(){d=s("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var F=i(f);u=n(F,"Module"),F.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function $m(V){let d,T,f,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
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
Egyptian cat`}}),{c(){d=s("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function xm(V){let d,T,f,u,v;return{c(){d=s("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var F=i(f);u=n(F,"Module"),F.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Em(V){let d,T,f,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),T=a("Examples:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Examples:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function km(V){let d,T,f,u,v;return{c(){d=s("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var F=i(f);u=n(F,"Module"),F.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Fm(V){let d,T,f,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){d=s("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=n(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function Vm(V){let d,T,f,u,v,l,p,F,z,C,q,D,se,I,Re,Q,He,Ce,U,Ke,re,ie,Je,Pe,X,Ge,Ae,Z,Ee,Xe,ve,A,L,qe,P,le,Ze,H,Qe,Ye,O,ke,de,et,ce,pe,Te,tt,Y,ot,S,at,he,W,nt,N,st,rt,b,M,ut,ee,gt,_t,j,vt,Tt,bt,me,wt,B,fe,yt,Fe,ue,$t,xt,Ve,Et,be,we,Qc,Ks,Do,Sr,Za,Wr,Js,Qa,Br,Gs,ze,qn,R,Ya,Ur,Rr,en,Hr,Kr,tn,Jr,Gr,zn,Xr,Zr,Nn,Qr,Yr,Dn,ei,ti,Ln,oi,ai,on,ni,si,ri,On,an,nn,ii,li,di,Sn,Lo,ci,Oo,pi,hi,mi,Wn,sn,rn,fi,ui,Xs,pt,gi,So,_i,vi,Wo,Ti,bi,Zs,Rt,wi,Bo,yi,$i,Qs,kt,Ht,Bn,Uo,xi,Un,Ei,Ys,Ie,Ro,ki,Ft,Fi,ln,Vi,Ii,Ho,Mi,ji,Ci,Vt,Pi,dn,Ai,qi,cn,zi,Ni,Di,Kt,er,It,Jt,Rn,Ko,Li,Hn,Oi,tr,Me,Jo,Si,Kn,Wi,Bi,Go,Ui,pn,Ri,Hi,Ki,ht,Xo,Ji,Jn,Gi,Xi,Gt,or,Mt,Xt,Gn,Zo,Zi,Xn,Qi,ar,it,Qo,Yi,Yo,el,ea,tl,ol,al,Ne,ta,nl,jt,sl,hn,rl,il,Zn,ll,dl,cl,Zt,pl,Qt,nr,Ct,Yt,Qn,oa,hl,Yn,ml,sr,ge,aa,fl,na,ul,sa,gl,_l,vl,eo,Tl,ra,bl,ia,wl,yl,$l,De,la,xl,Pt,El,mn,kl,Fl,es,Vl,Il,Ml,to,jl,oo,rr,At,ao,ts,da,Cl,os,Pl,ir,_e,ca,Al,as,ql,zl,no,Nl,pa,Dl,ha,Ll,Ol,Sl,Le,ma,Wl,qt,Bl,fn,Ul,Rl,ns,Hl,Kl,Jl,so,Gl,ro,lr,zt,io,ss,fa,Xl,rs,Zl,dr,te,ua,Ql,is,Yl,ed,ga,td,un,od,ad,nd,_a,sd,va,rd,id,ld,lo,dd,Oe,Ta,cd,Nt,pd,gn,hd,md,ls,fd,ud,gd,co,_d,po,cr,Dt,ho,ds,ba,vd,cs,Td,pr,K,wa,bd,ps,wd,yd,mo,$d,ya,xd,_n,Ed,kd,Fd,$a,Vd,xa,Id,Md,jd,fo,Cd,Se,Ea,Pd,Lt,Ad,vn,qd,zd,hs,Nd,Dd,Ld,uo,Od,go,hr,Ot,_o,ms,ka,Sd,fs,Wd,mr,J,Fa,Bd,us,Ud,Rd,Va,Hd,Tn,Kd,Jd,Gd,Ia,Xd,Ma,Zd,Qd,Yd,gs,ec,tc,lt,_s,ja,oc,ac,vs,Ca,nc,sc,Ts,Pa,rc,ic,bs,Aa,lc,dc,We,qa,cc,St,pc,ws,hc,mc,ys,fc,uc,gc,vo,_c,To,fr,Wt,bo,$s,za,vc,xs,Tc,ur,G,Na,bc,Es,wc,yc,Da,$c,bn,xc,Ec,kc,La,Fc,Oa,Vc,Ic,Mc,ks,jc,Cc,dt,Fs,Sa,Pc,Ac,Vs,Wa,qc,zc,Is,Ba,Nc,Dc,Ms,Ua,Lc,Oc,Be,Ra,Sc,Bt,Wc,js,Bc,Uc,Cs,Rc,Hc,Kc,wo,Jc,yo,gr;return l=new ct({}),I=new ct({}),Uo=new ct({}),Ro=new ne({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/configuration_vit.py#L35"}}),Kt=new qo({props:{anchor:"transformers.ViTConfig.example",$$slots:{default:[im]},$$scope:{ctx:V}}}),Ko=new ct({}),Jo=new ne({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/feature_extraction_vit.py#L36"}}),Xo=new ne({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),Gt=new je({props:{warning:!0,$$slots:{default:[lm]},$$scope:{ctx:V}}}),Zo=new ct({}),Qo=new ne({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L497"}}),ta=new ne({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Zt=new je({props:{$$slots:{default:[dm]},$$scope:{ctx:V}}}),Qt=new qo({props:{anchor:"transformers.ViTModel.forward.example",$$slots:{default:[cm]},$$scope:{ctx:V}}}),oa=new ct({}),aa=new ne({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L611"}}),eo=new je({props:{$$slots:{default:[pm]},$$scope:{ctx:V}}}),la=new ne({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L629",returnDescription:`
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
`}}),to=new je({props:{$$slots:{default:[hm]},$$scope:{ctx:V}}}),oo=new qo({props:{anchor:"transformers.ViTForMaskedImageModeling.forward.example",$$slots:{default:[mm]},$$scope:{ctx:V}}}),da=new ct({}),ca=new ne({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L733"}}),no=new je({props:{$$slots:{default:[fm]},$$scope:{ctx:V}}}),ma=new ne({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L746",returnDescription:`
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
`}}),so=new je({props:{$$slots:{default:[um]},$$scope:{ctx:V}}}),ro=new qo({props:{anchor:"transformers.ViTForImageClassification.forward.example",$$slots:{default:[gm]},$$scope:{ctx:V}}}),fa=new ct({}),ua=new ne({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L661"}}),lo=new je({props:{$$slots:{default:[_m]},$$scope:{ctx:V}}}),Ta=new ne({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),co=new je({props:{$$slots:{default:[vm]},$$scope:{ctx:V}}}),po=new qo({props:{anchor:"transformers.TFViTModel.call.example",$$slots:{default:[Tm]},$$scope:{ctx:V}}}),ba=new ct({}),wa=new ne({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L747"}}),mo=new je({props:{$$slots:{default:[bm]},$$scope:{ctx:V}}}),fo=new je({props:{$$slots:{default:[wm]},$$scope:{ctx:V}}}),Ea=new ne({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L761",returnDescription:`
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
`}}),uo=new je({props:{$$slots:{default:[ym]},$$scope:{ctx:V}}}),go=new qo({props:{anchor:"transformers.TFViTForImageClassification.call.example",$$slots:{default:[$m]},$$scope:{ctx:V}}}),ka=new ct({}),Fa=new ne({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L536"}}),qa=new ne({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L451",returnDescription:`
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
`}}),vo=new je({props:{$$slots:{default:[xm]},$$scope:{ctx:V}}}),To=new qo({props:{anchor:"transformers.FlaxViTModel.__call__.example",$$slots:{default:[Em]},$$scope:{ctx:V}}}),za=new ct({}),Na=new ne({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L617"}}),Ra=new ne({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L451",returnDescription:`
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
`}}),wo=new je({props:{$$slots:{default:[km]},$$scope:{ctx:V}}}),yo=new qo({props:{anchor:"transformers.FlaxViTForImageClassification.__call__.example",$$slots:{default:[Fm]},$$scope:{ctx:V}}}),{c(){d=s("meta"),T=h(),f=s("h1"),u=s("a"),v=s("span"),w(l.$$.fragment),p=h(),F=s("span"),z=a("Vision Transformer (ViT)"),C=h(),q=s("h2"),D=s("a"),se=s("span"),w(I.$$.fragment),Re=h(),Q=s("span"),He=a("Overview"),Ce=h(),U=s("p"),Ke=a("The Vision Transformer (ViT) model was proposed in "),re=s("a"),ie=a(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Je=a(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Pe=h(),X=s("p"),Ge=a("The abstract from the paper is the following:"),Ae=h(),Z=s("p"),Ee=s("em"),Xe=a(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),ve=h(),A=s("p"),L=a("Tips:"),qe=h(),P=s("ul"),le=s("li"),Ze=a("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),H=s("a"),Qe=a("here"),Ye=a("."),O=h(),ke=s("li"),de=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),et=h(),ce=s("li"),pe=a(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Te=s("a"),tt=a("ViTFeatureExtractor"),Y=a(" to resize (or rescale) and normalize images for the model."),ot=h(),S=s("li"),at=a(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),he=s("code"),W=a("google/vit-base-patch16-224"),nt=a(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),N=s("a"),st=a("hub"),rt=a("."),b=h(),M=s("li"),ut=a("The available checkpoints are either (1) pre-trained on "),ee=s("a"),gt=a("ImageNet-21k"),_t=a(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),j=s("a"),vt=a("ImageNet"),Tt=a(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),bt=h(),me=s("li"),wt=a(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),B=s("a"),fe=a("(Touvron et al., 2019)"),yt=a(", "),Fe=s("a"),ue=a(`(Kolesnikov
et al., 2020)`),$t=a(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),xt=h(),Ve=s("li"),Et=a(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),be=h(),we=s("img"),Ks=h(),Do=s("small"),Sr=a("ViT architecture. Taken from the "),Za=s("a"),Wr=a("original paper."),Js=h(),Qa=s("p"),Br=a("Following the original Vision Transformer, some follow-up works have been made:"),Gs=h(),ze=s("ul"),qn=s("li"),R=s("p"),Ya=s("a"),Ur=a("DeiT"),Rr=a(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),en=s("a"),Hr=a("ViTModel"),Kr=a(` or
`),tn=s("a"),Jr=a("ViTForImageClassification"),Gr=a(". There are 4 variants available (in 3 different sizes): "),zn=s("em"),Xr=a("facebook/deit-tiny-patch16-224"),Zr=a(`,
`),Nn=s("em"),Qr=a("facebook/deit-small-patch16-224"),Yr=a(", "),Dn=s("em"),ei=a("facebook/deit-base-patch16-224"),ti=a(" and "),Ln=s("em"),oi=a("facebook/deit-base-patch16-384"),ai=a(`. Note that one should
use `),on=s("a"),ni=a("DeiTFeatureExtractor"),si=a(" in order to prepare images for the model."),ri=h(),On=s("li"),an=s("p"),nn=s("a"),ii=a("BEiT"),li=a(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),di=h(),Sn=s("li"),Lo=s("p"),ci=a(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Oo=s("a"),pi=a("hub"),hi=a("."),mi=h(),Wn=s("li"),sn=s("p"),rn=s("a"),fi=a("MAE"),ui=a(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Xs=h(),pt=s("p"),gi=a("This model was contributed by "),So=s("a"),_i=a("nielsr"),vi=a(`. The original code (written in JAX) can be
found `),Wo=s("a"),Ti=a("here"),bi=a("."),Zs=h(),Rt=s("p"),wi=a("Note that we converted the weights from Ross Wightman\u2019s "),Bo=s("a"),yi=a("timm library"),$i=a(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Qs=h(),kt=s("h2"),Ht=s("a"),Bn=s("span"),w(Uo.$$.fragment),xi=h(),Un=s("span"),Ei=a("ViTConfig"),Ys=h(),Ie=s("div"),w(Ro.$$.fragment),ki=h(),Ft=s("p"),Fi=a("This is the configuration class to store the configuration of a "),ln=s("a"),Vi=a("ViTModel"),Ii=a(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Ho=s("a"),Mi=a("google/vit-base-patch16-224"),ji=a(" architecture."),Ci=h(),Vt=s("p"),Pi=a("Configuration objects inherit from "),dn=s("a"),Ai=a("PretrainedConfig"),qi=a(` and can be used to control the model outputs. Read the
documentation from `),cn=s("a"),zi=a("PretrainedConfig"),Ni=a(" for more information."),Di=h(),w(Kt.$$.fragment),er=h(),It=s("h2"),Jt=s("a"),Rn=s("span"),w(Ko.$$.fragment),Li=h(),Hn=s("span"),Oi=a("ViTFeatureExtractor"),tr=h(),Me=s("div"),w(Jo.$$.fragment),Si=h(),Kn=s("p"),Wi=a("Constructs a ViT feature extractor."),Bi=h(),Go=s("p"),Ui=a("This feature extractor inherits from "),pn=s("a"),Ri=a("FeatureExtractionMixin"),Hi=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ki=h(),ht=s("div"),w(Xo.$$.fragment),Ji=h(),Jn=s("p"),Gi=a("Main method to prepare for the model one or several image(s)."),Xi=h(),w(Gt.$$.fragment),or=h(),Mt=s("h2"),Xt=s("a"),Gn=s("span"),w(Zo.$$.fragment),Zi=h(),Xn=s("span"),Qi=a("ViTModel"),ar=h(),it=s("div"),w(Qo.$$.fragment),Yi=h(),Yo=s("p"),el=a(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ea=s("a"),tl=a("torch.nn.Module"),ol=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),al=h(),Ne=s("div"),w(ta.$$.fragment),nl=h(),jt=s("p"),sl=a("The "),hn=s("a"),rl=a("ViTModel"),il=a(" forward method, overrides the "),Zn=s("code"),ll=a("__call__"),dl=a(" special method."),cl=h(),w(Zt.$$.fragment),pl=h(),w(Qt.$$.fragment),nr=h(),Ct=s("h2"),Yt=s("a"),Qn=s("span"),w(oa.$$.fragment),hl=h(),Yn=s("span"),ml=a("ViTForMaskedImageModeling"),sr=h(),ge=s("div"),w(aa.$$.fragment),fl=h(),na=s("p"),ul=a("ViT Model with a decoder on top for masked image modeling, as proposed in "),sa=s("a"),gl=a("SimMIM"),_l=a("."),vl=h(),w(eo.$$.fragment),Tl=h(),ra=s("p"),bl=a("This model is a PyTorch "),ia=s("a"),wl=a("torch.nn.Module"),yl=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$l=h(),De=s("div"),w(la.$$.fragment),xl=h(),Pt=s("p"),El=a("The "),mn=s("a"),kl=a("ViTForMaskedImageModeling"),Fl=a(" forward method, overrides the "),es=s("code"),Vl=a("__call__"),Il=a(" special method."),Ml=h(),w(to.$$.fragment),jl=h(),w(oo.$$.fragment),rr=h(),At=s("h2"),ao=s("a"),ts=s("span"),w(da.$$.fragment),Cl=h(),os=s("span"),Pl=a("ViTForImageClassification"),ir=h(),_e=s("div"),w(ca.$$.fragment),Al=h(),as=s("p"),ql=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),zl=h(),w(no.$$.fragment),Nl=h(),pa=s("p"),Dl=a("This model is a PyTorch "),ha=s("a"),Ll=a("torch.nn.Module"),Ol=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sl=h(),Le=s("div"),w(ma.$$.fragment),Wl=h(),qt=s("p"),Bl=a("The "),fn=s("a"),Ul=a("ViTForImageClassification"),Rl=a(" forward method, overrides the "),ns=s("code"),Hl=a("__call__"),Kl=a(" special method."),Jl=h(),w(so.$$.fragment),Gl=h(),w(ro.$$.fragment),lr=h(),zt=s("h2"),io=s("a"),ss=s("span"),w(fa.$$.fragment),Xl=h(),rs=s("span"),Zl=a("TFViTModel"),dr=h(),te=s("div"),w(ua.$$.fragment),Ql=h(),is=s("p"),Yl=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),ed=h(),ga=s("p"),td=a("This model inherits from "),un=s("a"),od=a("TFPreTrainedModel"),ad=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nd=h(),_a=s("p"),sd=a("This model is also a "),va=s("a"),rd=a("tf.keras.Model"),id=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld=h(),w(lo.$$.fragment),dd=h(),Oe=s("div"),w(Ta.$$.fragment),cd=h(),Nt=s("p"),pd=a("The "),gn=s("a"),hd=a("TFViTModel"),md=a(" forward method, overrides the "),ls=s("code"),fd=a("__call__"),ud=a(" special method."),gd=h(),w(co.$$.fragment),_d=h(),w(po.$$.fragment),cr=h(),Dt=s("h2"),ho=s("a"),ds=s("span"),w(ba.$$.fragment),vd=h(),cs=s("span"),Td=a("TFViTForImageClassification"),pr=h(),K=s("div"),w(wa.$$.fragment),bd=h(),ps=s("p"),wd=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),yd=h(),w(mo.$$.fragment),$d=h(),ya=s("p"),xd=a("This model inherits from "),_n=s("a"),Ed=a("TFPreTrainedModel"),kd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd=h(),$a=s("p"),Vd=a("This model is also a "),xa=s("a"),Id=a("tf.keras.Model"),Md=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jd=h(),w(fo.$$.fragment),Cd=h(),Se=s("div"),w(Ea.$$.fragment),Pd=h(),Lt=s("p"),Ad=a("The "),vn=s("a"),qd=a("TFViTForImageClassification"),zd=a(" forward method, overrides the "),hs=s("code"),Nd=a("__call__"),Dd=a(" special method."),Ld=h(),w(uo.$$.fragment),Od=h(),w(go.$$.fragment),hr=h(),Ot=s("h2"),_o=s("a"),ms=s("span"),w(ka.$$.fragment),Sd=h(),fs=s("span"),Wd=a("FlaxVitModel"),mr=h(),J=s("div"),w(Fa.$$.fragment),Bd=h(),us=s("p"),Ud=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Rd=h(),Va=s("p"),Hd=a("This model inherits from "),Tn=s("a"),Kd=a("FlaxPreTrainedModel"),Jd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gd=h(),Ia=s("p"),Xd=a("This model is also a Flax Linen "),Ma=s("a"),Zd=a("flax.linen.Module"),Qd=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yd=h(),gs=s("p"),ec=a("Finally, this model supports inherent JAX features such as:"),tc=h(),lt=s("ul"),_s=s("li"),ja=s("a"),oc=a("Just-In-Time (JIT) compilation"),ac=h(),vs=s("li"),Ca=s("a"),nc=a("Automatic Differentiation"),sc=h(),Ts=s("li"),Pa=s("a"),rc=a("Vectorization"),ic=h(),bs=s("li"),Aa=s("a"),lc=a("Parallelization"),dc=h(),We=s("div"),w(qa.$$.fragment),cc=h(),St=s("p"),pc=a("The "),ws=s("code"),hc=a("FlaxViTPreTrainedModel"),mc=a(" forward method, overrides the "),ys=s("code"),fc=a("__call__"),uc=a(" special method."),gc=h(),w(vo.$$.fragment),_c=h(),w(To.$$.fragment),fr=h(),Wt=s("h2"),bo=s("a"),$s=s("span"),w(za.$$.fragment),vc=h(),xs=s("span"),Tc=a("FlaxViTForImageClassification"),ur=h(),G=s("div"),w(Na.$$.fragment),bc=h(),Es=s("p"),wc=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),yc=h(),Da=s("p"),$c=a("This model inherits from "),bn=s("a"),xc=a("FlaxPreTrainedModel"),Ec=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kc=h(),La=s("p"),Fc=a("This model is also a Flax Linen "),Oa=s("a"),Vc=a("flax.linen.Module"),Ic=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mc=h(),ks=s("p"),jc=a("Finally, this model supports inherent JAX features such as:"),Cc=h(),dt=s("ul"),Fs=s("li"),Sa=s("a"),Pc=a("Just-In-Time (JIT) compilation"),Ac=h(),Vs=s("li"),Wa=s("a"),qc=a("Automatic Differentiation"),zc=h(),Is=s("li"),Ba=s("a"),Nc=a("Vectorization"),Dc=h(),Ms=s("li"),Ua=s("a"),Lc=a("Parallelization"),Oc=h(),Be=s("div"),w(Ra.$$.fragment),Sc=h(),Bt=s("p"),Wc=a("The "),js=s("code"),Bc=a("FlaxViTPreTrainedModel"),Uc=a(" forward method, overrides the "),Cs=s("code"),Rc=a("__call__"),Hc=a(" special method."),Kc=h(),w(wo.$$.fragment),Jc=h(),w(yo.$$.fragment),this.h()},l(o){const g=nm('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),T=m(o),f=r(o,"H1",{class:!0});var Ha=i(f);u=r(Ha,"A",{id:!0,class:!0,href:!0});var Ps=i(u);v=r(Ps,"SPAN",{});var As=i(v);y(l.$$.fragment,As),As.forEach(t),Ps.forEach(t),p=m(Ha),F=r(Ha,"SPAN",{});var qs=i(F);z=n(qs,"Vision Transformer (ViT)"),qs.forEach(t),Ha.forEach(t),C=m(o),q=r(o,"H2",{class:!0});var Ka=i(q);D=r(Ka,"A",{id:!0,class:!0,href:!0});var zs=i(D);se=r(zs,"SPAN",{});var Ns=i(se);y(I.$$.fragment,Ns),Ns.forEach(t),zs.forEach(t),Re=m(Ka),Q=r(Ka,"SPAN",{});var Ds=i(Q);He=n(Ds,"Overview"),Ds.forEach(t),Ka.forEach(t),Ce=m(o),U=r(o,"P",{});var Ja=i(U);Ke=n(Ja,"The Vision Transformer (ViT) model was proposed in "),re=r(Ja,"A",{href:!0,rel:!0});var Ls=i(re);ie=n(Ls,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Ls.forEach(t),Je=n(Ja,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Ja.forEach(t),Pe=m(o),X=r(o,"P",{});var Os=i(X);Ge=n(Os,"The abstract from the paper is the following:"),Os.forEach(t),Ae=m(o),Z=r(o,"P",{});var Ss=i(Z);Ee=r(Ss,"EM",{});var Ws=i(Ee);Xe=n(Ws,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Ws.forEach(t),Ss.forEach(t),ve=m(o),A=r(o,"P",{});var Bs=i(A);L=n(Bs,"Tips:"),Bs.forEach(t),qe=m(o),P=r(o,"UL",{});var oe=i(P);le=r(oe,"LI",{});var Ga=i(le);Ze=n(Ga,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),H=r(Ga,"A",{href:!0,rel:!0});var Us=i(H);Qe=n(Us,"here"),Us.forEach(t),Ye=n(Ga,"."),Ga.forEach(t),O=m(oe),ke=r(oe,"LI",{});var Rs=i(ke);de=n(Rs,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),Rs.forEach(t),et=m(oe),ce=r(oe,"LI",{});var Xa=i(ce);pe=n(Xa,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Te=r(Xa,"A",{href:!0});var Hs=i(Te);tt=n(Hs,"ViTFeatureExtractor"),Hs.forEach(t),Y=n(Xa," to resize (or rescale) and normalize images for the model."),Xa.forEach(t),ot=m(oe),S=r(oe,"LI",{});var Ut=i(S);at=n(Ut,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),he=r(Ut,"CODE",{});var Yc=i(he);W=n(Yc,"google/vit-base-patch16-224"),Yc.forEach(t),nt=n(Ut,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),N=r(Ut,"A",{href:!0,rel:!0});var ep=i(N);st=n(ep,"hub"),ep.forEach(t),rt=n(Ut,"."),Ut.forEach(t),b=m(oe),M=r(oe,"LI",{});var wn=i(M);ut=n(wn,"The available checkpoints are either (1) pre-trained on "),ee=r(wn,"A",{href:!0,rel:!0});var tp=i(ee);gt=n(tp,"ImageNet-21k"),tp.forEach(t),_t=n(wn,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),j=r(wn,"A",{href:!0,rel:!0});var op=i(j);vt=n(op,"ImageNet"),op.forEach(t),Tt=n(wn,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),wn.forEach(t),bt=m(oe),me=r(oe,"LI",{});var yn=i(me);wt=n(yn,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),B=r(yn,"A",{href:!0,rel:!0});var ap=i(B);fe=n(ap,"(Touvron et al., 2019)"),ap.forEach(t),yt=n(yn,", "),Fe=r(yn,"A",{href:!0,rel:!0});var np=i(Fe);ue=n(np,`(Kolesnikov
et al., 2020)`),np.forEach(t),$t=n(yn,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),yn.forEach(t),xt=m(oe),Ve=r(oe,"LI",{});var sp=i(Ve);Et=n(sp,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),sp.forEach(t),oe.forEach(t),be=m(o),we=r(o,"IMG",{src:!0,alt:!0,width:!0}),Ks=m(o),Do=r(o,"SMALL",{});var Gc=i(Do);Sr=n(Gc,"ViT architecture. Taken from the "),Za=r(Gc,"A",{href:!0});var rp=i(Za);Wr=n(rp,"original paper."),rp.forEach(t),Gc.forEach(t),Js=m(o),Qa=r(o,"P",{});var ip=i(Qa);Br=n(ip,"Following the original Vision Transformer, some follow-up works have been made:"),ip.forEach(t),Gs=m(o),ze=r(o,"UL",{});var $o=i(ze);qn=r($o,"LI",{});var lp=i(qn);R=r(lp,"P",{});var ae=i(R);Ya=r(ae,"A",{href:!0});var dp=i(Ya);Ur=n(dp,"DeiT"),dp.forEach(t),Rr=n(ae,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),en=r(ae,"A",{href:!0});var cp=i(en);Hr=n(cp,"ViTModel"),cp.forEach(t),Kr=n(ae,` or
`),tn=r(ae,"A",{href:!0});var pp=i(tn);Jr=n(pp,"ViTForImageClassification"),pp.forEach(t),Gr=n(ae,". There are 4 variants available (in 3 different sizes): "),zn=r(ae,"EM",{});var hp=i(zn);Xr=n(hp,"facebook/deit-tiny-patch16-224"),hp.forEach(t),Zr=n(ae,`,
`),Nn=r(ae,"EM",{});var mp=i(Nn);Qr=n(mp,"facebook/deit-small-patch16-224"),mp.forEach(t),Yr=n(ae,", "),Dn=r(ae,"EM",{});var fp=i(Dn);ei=n(fp,"facebook/deit-base-patch16-224"),fp.forEach(t),ti=n(ae," and "),Ln=r(ae,"EM",{});var up=i(Ln);oi=n(up,"facebook/deit-base-patch16-384"),up.forEach(t),ai=n(ae,`. Note that one should
use `),on=r(ae,"A",{href:!0});var gp=i(on);ni=n(gp,"DeiTFeatureExtractor"),gp.forEach(t),si=n(ae," in order to prepare images for the model."),ae.forEach(t),lp.forEach(t),ri=m($o),On=r($o,"LI",{});var _p=i(On);an=r(_p,"P",{});var Xc=i(an);nn=r(Xc,"A",{href:!0});var vp=i(nn);ii=n(vp,"BEiT"),vp.forEach(t),li=n(Xc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Xc.forEach(t),_p.forEach(t),di=m($o),Sn=r($o,"LI",{});var Tp=i(Sn);Lo=r(Tp,"P",{});var _r=i(Lo);ci=n(_r,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Oo=r(_r,"A",{href:!0,rel:!0});var bp=i(Oo);pi=n(bp,"hub"),bp.forEach(t),hi=n(_r,"."),_r.forEach(t),Tp.forEach(t),mi=m($o),Wn=r($o,"LI",{});var wp=i(Wn);sn=r(wp,"P",{});var Zc=i(sn);rn=r(Zc,"A",{href:!0});var yp=i(rn);fi=n(yp,"MAE"),yp.forEach(t),ui=n(Zc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Zc.forEach(t),wp.forEach(t),$o.forEach(t),Xs=m(o),pt=r(o,"P",{});var $n=i(pt);gi=n($n,"This model was contributed by "),So=r($n,"A",{href:!0,rel:!0});var $p=i(So);_i=n($p,"nielsr"),$p.forEach(t),vi=n($n,`. The original code (written in JAX) can be
found `),Wo=r($n,"A",{href:!0,rel:!0});var xp=i(Wo);Ti=n(xp,"here"),xp.forEach(t),bi=n($n,"."),$n.forEach(t),Zs=m(o),Rt=r(o,"P",{});var vr=i(Rt);wi=n(vr,"Note that we converted the weights from Ross Wightman\u2019s "),Bo=r(vr,"A",{href:!0,rel:!0});var Ep=i(Bo);yi=n(Ep,"timm library"),Ep.forEach(t),$i=n(vr,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),vr.forEach(t),Qs=m(o),kt=r(o,"H2",{class:!0});var Tr=i(kt);Ht=r(Tr,"A",{id:!0,class:!0,href:!0});var kp=i(Ht);Bn=r(kp,"SPAN",{});var Fp=i(Bn);y(Uo.$$.fragment,Fp),Fp.forEach(t),kp.forEach(t),xi=m(Tr),Un=r(Tr,"SPAN",{});var Vp=i(Un);Ei=n(Vp,"ViTConfig"),Vp.forEach(t),Tr.forEach(t),Ys=m(o),Ie=r(o,"DIV",{class:!0});var xo=i(Ie);y(Ro.$$.fragment,xo),ki=m(xo),Ft=r(xo,"P",{});var xn=i(Ft);Fi=n(xn,"This is the configuration class to store the configuration of a "),ln=r(xn,"A",{href:!0});var Ip=i(ln);Vi=n(Ip,"ViTModel"),Ip.forEach(t),Ii=n(xn,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Ho=r(xn,"A",{href:!0,rel:!0});var Mp=i(Ho);Mi=n(Mp,"google/vit-base-patch16-224"),Mp.forEach(t),ji=n(xn," architecture."),xn.forEach(t),Ci=m(xo),Vt=r(xo,"P",{});var En=i(Vt);Pi=n(En,"Configuration objects inherit from "),dn=r(En,"A",{href:!0});var jp=i(dn);Ai=n(jp,"PretrainedConfig"),jp.forEach(t),qi=n(En,` and can be used to control the model outputs. Read the
documentation from `),cn=r(En,"A",{href:!0});var Cp=i(cn);zi=n(Cp,"PretrainedConfig"),Cp.forEach(t),Ni=n(En," for more information."),En.forEach(t),Di=m(xo),y(Kt.$$.fragment,xo),xo.forEach(t),er=m(o),It=r(o,"H2",{class:!0});var br=i(It);Jt=r(br,"A",{id:!0,class:!0,href:!0});var Pp=i(Jt);Rn=r(Pp,"SPAN",{});var Ap=i(Rn);y(Ko.$$.fragment,Ap),Ap.forEach(t),Pp.forEach(t),Li=m(br),Hn=r(br,"SPAN",{});var qp=i(Hn);Oi=n(qp,"ViTFeatureExtractor"),qp.forEach(t),br.forEach(t),tr=m(o),Me=r(o,"DIV",{class:!0});var Eo=i(Me);y(Jo.$$.fragment,Eo),Si=m(Eo),Kn=r(Eo,"P",{});var zp=i(Kn);Wi=n(zp,"Constructs a ViT feature extractor."),zp.forEach(t),Bi=m(Eo),Go=r(Eo,"P",{});var wr=i(Go);Ui=n(wr,"This feature extractor inherits from "),pn=r(wr,"A",{href:!0});var Np=i(pn);Ri=n(Np,"FeatureExtractionMixin"),Np.forEach(t),Hi=n(wr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),wr.forEach(t),Ki=m(Eo),ht=r(Eo,"DIV",{class:!0});var kn=i(ht);y(Xo.$$.fragment,kn),Ji=m(kn),Jn=r(kn,"P",{});var Dp=i(Jn);Gi=n(Dp,"Main method to prepare for the model one or several image(s)."),Dp.forEach(t),Xi=m(kn),y(Gt.$$.fragment,kn),kn.forEach(t),Eo.forEach(t),or=m(o),Mt=r(o,"H2",{class:!0});var yr=i(Mt);Xt=r(yr,"A",{id:!0,class:!0,href:!0});var Lp=i(Xt);Gn=r(Lp,"SPAN",{});var Op=i(Gn);y(Zo.$$.fragment,Op),Op.forEach(t),Lp.forEach(t),Zi=m(yr),Xn=r(yr,"SPAN",{});var Sp=i(Xn);Qi=n(Sp,"ViTModel"),Sp.forEach(t),yr.forEach(t),ar=m(o),it=r(o,"DIV",{class:!0});var Fn=i(it);y(Qo.$$.fragment,Fn),Yi=m(Fn),Yo=r(Fn,"P",{});var $r=i(Yo);el=n($r,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ea=r($r,"A",{href:!0,rel:!0});var Wp=i(ea);tl=n(Wp,"torch.nn.Module"),Wp.forEach(t),ol=n($r,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$r.forEach(t),al=m(Fn),Ne=r(Fn,"DIV",{class:!0});var ko=i(Ne);y(ta.$$.fragment,ko),nl=m(ko),jt=r(ko,"P",{});var Vn=i(jt);sl=n(Vn,"The "),hn=r(Vn,"A",{href:!0});var Bp=i(hn);rl=n(Bp,"ViTModel"),Bp.forEach(t),il=n(Vn," forward method, overrides the "),Zn=r(Vn,"CODE",{});var Up=i(Zn);ll=n(Up,"__call__"),Up.forEach(t),dl=n(Vn," special method."),Vn.forEach(t),cl=m(ko),y(Zt.$$.fragment,ko),pl=m(ko),y(Qt.$$.fragment,ko),ko.forEach(t),Fn.forEach(t),nr=m(o),Ct=r(o,"H2",{class:!0});var xr=i(Ct);Yt=r(xr,"A",{id:!0,class:!0,href:!0});var Rp=i(Yt);Qn=r(Rp,"SPAN",{});var Hp=i(Qn);y(oa.$$.fragment,Hp),Hp.forEach(t),Rp.forEach(t),hl=m(xr),Yn=r(xr,"SPAN",{});var Kp=i(Yn);ml=n(Kp,"ViTForMaskedImageModeling"),Kp.forEach(t),xr.forEach(t),sr=m(o),ge=r(o,"DIV",{class:!0});var mt=i(ge);y(aa.$$.fragment,mt),fl=m(mt),na=r(mt,"P",{});var Er=i(na);ul=n(Er,"ViT Model with a decoder on top for masked image modeling, as proposed in "),sa=r(Er,"A",{href:!0,rel:!0});var Jp=i(sa);gl=n(Jp,"SimMIM"),Jp.forEach(t),_l=n(Er,"."),Er.forEach(t),vl=m(mt),y(eo.$$.fragment,mt),Tl=m(mt),ra=r(mt,"P",{});var kr=i(ra);bl=n(kr,"This model is a PyTorch "),ia=r(kr,"A",{href:!0,rel:!0});var Gp=i(ia);wl=n(Gp,"torch.nn.Module"),Gp.forEach(t),yl=n(kr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr.forEach(t),$l=m(mt),De=r(mt,"DIV",{class:!0});var Fo=i(De);y(la.$$.fragment,Fo),xl=m(Fo),Pt=r(Fo,"P",{});var In=i(Pt);El=n(In,"The "),mn=r(In,"A",{href:!0});var Xp=i(mn);kl=n(Xp,"ViTForMaskedImageModeling"),Xp.forEach(t),Fl=n(In," forward method, overrides the "),es=r(In,"CODE",{});var Zp=i(es);Vl=n(Zp,"__call__"),Zp.forEach(t),Il=n(In," special method."),In.forEach(t),Ml=m(Fo),y(to.$$.fragment,Fo),jl=m(Fo),y(oo.$$.fragment,Fo),Fo.forEach(t),mt.forEach(t),rr=m(o),At=r(o,"H2",{class:!0});var Fr=i(At);ao=r(Fr,"A",{id:!0,class:!0,href:!0});var Qp=i(ao);ts=r(Qp,"SPAN",{});var Yp=i(ts);y(da.$$.fragment,Yp),Yp.forEach(t),Qp.forEach(t),Cl=m(Fr),os=r(Fr,"SPAN",{});var eh=i(os);Pl=n(eh,"ViTForImageClassification"),eh.forEach(t),Fr.forEach(t),ir=m(o),_e=r(o,"DIV",{class:!0});var ft=i(_e);y(ca.$$.fragment,ft),Al=m(ft),as=r(ft,"P",{});var th=i(as);ql=n(th,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),th.forEach(t),zl=m(ft),y(no.$$.fragment,ft),Nl=m(ft),pa=r(ft,"P",{});var Vr=i(pa);Dl=n(Vr,"This model is a PyTorch "),ha=r(Vr,"A",{href:!0,rel:!0});var oh=i(ha);Ll=n(oh,"torch.nn.Module"),oh.forEach(t),Ol=n(Vr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vr.forEach(t),Sl=m(ft),Le=r(ft,"DIV",{class:!0});var Vo=i(Le);y(ma.$$.fragment,Vo),Wl=m(Vo),qt=r(Vo,"P",{});var Mn=i(qt);Bl=n(Mn,"The "),fn=r(Mn,"A",{href:!0});var ah=i(fn);Ul=n(ah,"ViTForImageClassification"),ah.forEach(t),Rl=n(Mn," forward method, overrides the "),ns=r(Mn,"CODE",{});var nh=i(ns);Hl=n(nh,"__call__"),nh.forEach(t),Kl=n(Mn," special method."),Mn.forEach(t),Jl=m(Vo),y(so.$$.fragment,Vo),Gl=m(Vo),y(ro.$$.fragment,Vo),Vo.forEach(t),ft.forEach(t),lr=m(o),zt=r(o,"H2",{class:!0});var Ir=i(zt);io=r(Ir,"A",{id:!0,class:!0,href:!0});var sh=i(io);ss=r(sh,"SPAN",{});var rh=i(ss);y(fa.$$.fragment,rh),rh.forEach(t),sh.forEach(t),Xl=m(Ir),rs=r(Ir,"SPAN",{});var ih=i(rs);Zl=n(ih,"TFViTModel"),ih.forEach(t),Ir.forEach(t),dr=m(o),te=r(o,"DIV",{class:!0});var Ue=i(te);y(ua.$$.fragment,Ue),Ql=m(Ue),is=r(Ue,"P",{});var lh=i(is);Yl=n(lh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),lh.forEach(t),ed=m(Ue),ga=r(Ue,"P",{});var Mr=i(ga);td=n(Mr,"This model inherits from "),un=r(Mr,"A",{href:!0});var dh=i(un);od=n(dh,"TFPreTrainedModel"),dh.forEach(t),ad=n(Mr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr.forEach(t),nd=m(Ue),_a=r(Ue,"P",{});var jr=i(_a);sd=n(jr,"This model is also a "),va=r(jr,"A",{href:!0,rel:!0});var ch=i(va);rd=n(ch,"tf.keras.Model"),ch.forEach(t),id=n(jr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jr.forEach(t),ld=m(Ue),y(lo.$$.fragment,Ue),dd=m(Ue),Oe=r(Ue,"DIV",{class:!0});var Io=i(Oe);y(Ta.$$.fragment,Io),cd=m(Io),Nt=r(Io,"P",{});var jn=i(Nt);pd=n(jn,"The "),gn=r(jn,"A",{href:!0});var ph=i(gn);hd=n(ph,"TFViTModel"),ph.forEach(t),md=n(jn," forward method, overrides the "),ls=r(jn,"CODE",{});var hh=i(ls);fd=n(hh,"__call__"),hh.forEach(t),ud=n(jn," special method."),jn.forEach(t),gd=m(Io),y(co.$$.fragment,Io),_d=m(Io),y(po.$$.fragment,Io),Io.forEach(t),Ue.forEach(t),cr=m(o),Dt=r(o,"H2",{class:!0});var Cr=i(Dt);ho=r(Cr,"A",{id:!0,class:!0,href:!0});var mh=i(ho);ds=r(mh,"SPAN",{});var fh=i(ds);y(ba.$$.fragment,fh),fh.forEach(t),mh.forEach(t),vd=m(Cr),cs=r(Cr,"SPAN",{});var uh=i(cs);Td=n(uh,"TFViTForImageClassification"),uh.forEach(t),Cr.forEach(t),pr=m(o),K=r(o,"DIV",{class:!0});var ye=i(K);y(wa.$$.fragment,ye),bd=m(ye),ps=r(ye,"P",{});var gh=i(ps);wd=n(gh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),gh.forEach(t),yd=m(ye),y(mo.$$.fragment,ye),$d=m(ye),ya=r(ye,"P",{});var Pr=i(ya);xd=n(Pr,"This model inherits from "),_n=r(Pr,"A",{href:!0});var _h=i(_n);Ed=n(_h,"TFPreTrainedModel"),_h.forEach(t),kd=n(Pr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr.forEach(t),Fd=m(ye),$a=r(ye,"P",{});var Ar=i($a);Vd=n(Ar,"This model is also a "),xa=r(Ar,"A",{href:!0,rel:!0});var vh=i(xa);Id=n(vh,"tf.keras.Model"),vh.forEach(t),Md=n(Ar,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ar.forEach(t),jd=m(ye),y(fo.$$.fragment,ye),Cd=m(ye),Se=r(ye,"DIV",{class:!0});var Mo=i(Se);y(Ea.$$.fragment,Mo),Pd=m(Mo),Lt=r(Mo,"P",{});var Cn=i(Lt);Ad=n(Cn,"The "),vn=r(Cn,"A",{href:!0});var Th=i(vn);qd=n(Th,"TFViTForImageClassification"),Th.forEach(t),zd=n(Cn," forward method, overrides the "),hs=r(Cn,"CODE",{});var bh=i(hs);Nd=n(bh,"__call__"),bh.forEach(t),Dd=n(Cn," special method."),Cn.forEach(t),Ld=m(Mo),y(uo.$$.fragment,Mo),Od=m(Mo),y(go.$$.fragment,Mo),Mo.forEach(t),ye.forEach(t),hr=m(o),Ot=r(o,"H2",{class:!0});var qr=i(Ot);_o=r(qr,"A",{id:!0,class:!0,href:!0});var wh=i(_o);ms=r(wh,"SPAN",{});var yh=i(ms);y(ka.$$.fragment,yh),yh.forEach(t),wh.forEach(t),Sd=m(qr),fs=r(qr,"SPAN",{});var $h=i(fs);Wd=n($h,"FlaxVitModel"),$h.forEach(t),qr.forEach(t),mr=m(o),J=r(o,"DIV",{class:!0});var $e=i(J);y(Fa.$$.fragment,$e),Bd=m($e),us=r($e,"P",{});var xh=i(us);Ud=n(xh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),xh.forEach(t),Rd=m($e),Va=r($e,"P",{});var zr=i(Va);Hd=n(zr,"This model inherits from "),Tn=r(zr,"A",{href:!0});var Eh=i(Tn);Kd=n(Eh,"FlaxPreTrainedModel"),Eh.forEach(t),Jd=n(zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zr.forEach(t),Gd=m($e),Ia=r($e,"P",{});var Nr=i(Ia);Xd=n(Nr,"This model is also a Flax Linen "),Ma=r(Nr,"A",{href:!0,rel:!0});var kh=i(Ma);Zd=n(kh,"flax.linen.Module"),kh.forEach(t),Qd=n(Nr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nr.forEach(t),Yd=m($e),gs=r($e,"P",{});var Fh=i(gs);ec=n(Fh,"Finally, this model supports inherent JAX features such as:"),Fh.forEach(t),tc=m($e),lt=r($e,"UL",{});var jo=i(lt);_s=r(jo,"LI",{});var Vh=i(_s);ja=r(Vh,"A",{href:!0,rel:!0});var Ih=i(ja);oc=n(Ih,"Just-In-Time (JIT) compilation"),Ih.forEach(t),Vh.forEach(t),ac=m(jo),vs=r(jo,"LI",{});var Mh=i(vs);Ca=r(Mh,"A",{href:!0,rel:!0});var jh=i(Ca);nc=n(jh,"Automatic Differentiation"),jh.forEach(t),Mh.forEach(t),sc=m(jo),Ts=r(jo,"LI",{});var Ch=i(Ts);Pa=r(Ch,"A",{href:!0,rel:!0});var Ph=i(Pa);rc=n(Ph,"Vectorization"),Ph.forEach(t),Ch.forEach(t),ic=m(jo),bs=r(jo,"LI",{});var Ah=i(bs);Aa=r(Ah,"A",{href:!0,rel:!0});var qh=i(Aa);lc=n(qh,"Parallelization"),qh.forEach(t),Ah.forEach(t),jo.forEach(t),dc=m($e),We=r($e,"DIV",{class:!0});var Co=i(We);y(qa.$$.fragment,Co),cc=m(Co),St=r(Co,"P",{});var Pn=i(St);pc=n(Pn,"The "),ws=r(Pn,"CODE",{});var zh=i(ws);hc=n(zh,"FlaxViTPreTrainedModel"),zh.forEach(t),mc=n(Pn," forward method, overrides the "),ys=r(Pn,"CODE",{});var Nh=i(ys);fc=n(Nh,"__call__"),Nh.forEach(t),uc=n(Pn," special method."),Pn.forEach(t),gc=m(Co),y(vo.$$.fragment,Co),_c=m(Co),y(To.$$.fragment,Co),Co.forEach(t),$e.forEach(t),fr=m(o),Wt=r(o,"H2",{class:!0});var Dr=i(Wt);bo=r(Dr,"A",{id:!0,class:!0,href:!0});var Dh=i(bo);$s=r(Dh,"SPAN",{});var Lh=i($s);y(za.$$.fragment,Lh),Lh.forEach(t),Dh.forEach(t),vc=m(Dr),xs=r(Dr,"SPAN",{});var Oh=i(xs);Tc=n(Oh,"FlaxViTForImageClassification"),Oh.forEach(t),Dr.forEach(t),ur=m(o),G=r(o,"DIV",{class:!0});var xe=i(G);y(Na.$$.fragment,xe),bc=m(xe),Es=r(xe,"P",{});var Sh=i(Es);wc=n(Sh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Sh.forEach(t),yc=m(xe),Da=r(xe,"P",{});var Lr=i(Da);$c=n(Lr,"This model inherits from "),bn=r(Lr,"A",{href:!0});var Wh=i(bn);xc=n(Wh,"FlaxPreTrainedModel"),Wh.forEach(t),Ec=n(Lr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lr.forEach(t),kc=m(xe),La=r(xe,"P",{});var Or=i(La);Fc=n(Or,"This model is also a Flax Linen "),Oa=r(Or,"A",{href:!0,rel:!0});var Bh=i(Oa);Vc=n(Bh,"flax.linen.Module"),Bh.forEach(t),Ic=n(Or,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Or.forEach(t),Mc=m(xe),ks=r(xe,"P",{});var Uh=i(ks);jc=n(Uh,"Finally, this model supports inherent JAX features such as:"),Uh.forEach(t),Cc=m(xe),dt=r(xe,"UL",{});var Po=i(dt);Fs=r(Po,"LI",{});var Rh=i(Fs);Sa=r(Rh,"A",{href:!0,rel:!0});var Hh=i(Sa);Pc=n(Hh,"Just-In-Time (JIT) compilation"),Hh.forEach(t),Rh.forEach(t),Ac=m(Po),Vs=r(Po,"LI",{});var Kh=i(Vs);Wa=r(Kh,"A",{href:!0,rel:!0});var Jh=i(Wa);qc=n(Jh,"Automatic Differentiation"),Jh.forEach(t),Kh.forEach(t),zc=m(Po),Is=r(Po,"LI",{});var Gh=i(Is);Ba=r(Gh,"A",{href:!0,rel:!0});var Xh=i(Ba);Nc=n(Xh,"Vectorization"),Xh.forEach(t),Gh.forEach(t),Dc=m(Po),Ms=r(Po,"LI",{});var Zh=i(Ms);Ua=r(Zh,"A",{href:!0,rel:!0});var Qh=i(Ua);Lc=n(Qh,"Parallelization"),Qh.forEach(t),Zh.forEach(t),Po.forEach(t),Oc=m(xe),Be=r(xe,"DIV",{class:!0});var Ao=i(Be);y(Ra.$$.fragment,Ao),Sc=m(Ao),Bt=r(Ao,"P",{});var An=i(Bt);Wc=n(An,"The "),js=r(An,"CODE",{});var Yh=i(js);Bc=n(Yh,"FlaxViTPreTrainedModel"),Yh.forEach(t),Uc=n(An," forward method, overrides the "),Cs=r(An,"CODE",{});var em=i(Cs);Rc=n(em,"__call__"),em.forEach(t),Hc=n(An," special method."),An.forEach(t),Kc=m(Ao),y(wo.$$.fragment,Ao),Jc=m(Ao),y(yo.$$.fragment,Ao),Ao.forEach(t),xe.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Im)),c(u,"id","vision-transformer-vit"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#vision-transformer-vit"),c(f,"class","relative group"),c(D,"id","overview"),c(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(D,"href","#overview"),c(q,"class","relative group"),c(re,"href","https://arxiv.org/abs/2010.11929"),c(re,"rel","nofollow"),c(H,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),c(H,"rel","nofollow"),c(Te,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),c(N,"href","https://huggingface.co/models?search=vit"),c(N,"rel","nofollow"),c(ee,"href","http://www.image-net.org/"),c(ee,"rel","nofollow"),c(j,"href","http://www.image-net.org/challenges/LSVRC/2012/"),c(j,"rel","nofollow"),c(B,"href","https://arxiv.org/abs/1906.06423"),c(B,"rel","nofollow"),c(Fe,"href","https://arxiv.org/abs/1912.11370"),c(Fe,"rel","nofollow"),sm(we.src,Qc="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/vit_architecture.jpg")||c(we,"src",Qc),c(we,"alt","drawing"),c(we,"width","600"),c(Za,"href","https://arxiv.org/abs/2010.11929"),c(Ya,"href","deit"),c(en,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(tn,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(on,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor"),c(nn,"href","beit"),c(Oo,"href","https://huggingface.co/models?other=dino"),c(Oo,"rel","nofollow"),c(rn,"href","vit_mae"),c(So,"href","https://huggingface.co/nielsr"),c(So,"rel","nofollow"),c(Wo,"href","https://github.com/google-research/vision_transformer"),c(Wo,"rel","nofollow"),c(Bo,"href","https://github.com/rwightman/pytorch-image-models"),c(Bo,"rel","nofollow"),c(Ht,"id","transformers.ViTConfig"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.ViTConfig"),c(kt,"class","relative group"),c(ln,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Ho,"href","https://huggingface.co/google/vit-base-patch16-224"),c(Ho,"rel","nofollow"),c(dn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(cn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jt,"id","transformers.ViTFeatureExtractor"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.ViTFeatureExtractor"),c(It,"class","relative group"),c(pn,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.ViTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.ViTModel"),c(Mt,"class","relative group"),c(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ea,"rel","nofollow"),c(hn,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Yt,"id","transformers.ViTForMaskedImageModeling"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.ViTForMaskedImageModeling"),c(Ct,"class","relative group"),c(sa,"href","https://arxiv.org/abs/2111.09886"),c(sa,"rel","nofollow"),c(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ia,"rel","nofollow"),c(mn,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.ViTForImageClassification"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.ViTForImageClassification"),c(At,"class","relative group"),c(ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ha,"rel","nofollow"),c(fn,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.TFViTModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFViTModel"),c(zt,"class","relative group"),c(un,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(va,"rel","nofollow"),c(gn,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTModel"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ho,"id","transformers.TFViTForImageClassification"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFViTForImageClassification"),c(Dt,"class","relative group"),c(_n,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(xa,"rel","nofollow"),c(vn,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTForImageClassification"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_o,"id","transformers.FlaxViTModel"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.FlaxViTModel"),c(Ot,"class","relative group"),c(Tn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ma,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ja,"rel","nofollow"),c(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ca,"rel","nofollow"),c(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Pa,"rel","nofollow"),c(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Aa,"rel","nofollow"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bo,"id","transformers.FlaxViTForImageClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.FlaxViTForImageClassification"),c(Wt,"class","relative group"),c(bn,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Oa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Oa,"rel","nofollow"),c(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Sa,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Wa,"rel","nofollow"),c(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ba,"rel","nofollow"),c(Ua,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ua,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,f,g),e(f,u),e(u,v),$(l,v,null),e(f,p),e(f,F),e(F,z),_(o,C,g),_(o,q,g),e(q,D),e(D,se),$(I,se,null),e(q,Re),e(q,Q),e(Q,He),_(o,Ce,g),_(o,U,g),e(U,Ke),e(U,re),e(re,ie),e(U,Je),_(o,Pe,g),_(o,X,g),e(X,Ge),_(o,Ae,g),_(o,Z,g),e(Z,Ee),e(Ee,Xe),_(o,ve,g),_(o,A,g),e(A,L),_(o,qe,g),_(o,P,g),e(P,le),e(le,Ze),e(le,H),e(H,Qe),e(le,Ye),e(P,O),e(P,ke),e(ke,de),e(P,et),e(P,ce),e(ce,pe),e(ce,Te),e(Te,tt),e(ce,Y),e(P,ot),e(P,S),e(S,at),e(S,he),e(he,W),e(S,nt),e(S,N),e(N,st),e(S,rt),e(P,b),e(P,M),e(M,ut),e(M,ee),e(ee,gt),e(M,_t),e(M,j),e(j,vt),e(M,Tt),e(P,bt),e(P,me),e(me,wt),e(me,B),e(B,fe),e(me,yt),e(me,Fe),e(Fe,ue),e(me,$t),e(P,xt),e(P,Ve),e(Ve,Et),_(o,be,g),_(o,we,g),_(o,Ks,g),_(o,Do,g),e(Do,Sr),e(Do,Za),e(Za,Wr),_(o,Js,g),_(o,Qa,g),e(Qa,Br),_(o,Gs,g),_(o,ze,g),e(ze,qn),e(qn,R),e(R,Ya),e(Ya,Ur),e(R,Rr),e(R,en),e(en,Hr),e(R,Kr),e(R,tn),e(tn,Jr),e(R,Gr),e(R,zn),e(zn,Xr),e(R,Zr),e(R,Nn),e(Nn,Qr),e(R,Yr),e(R,Dn),e(Dn,ei),e(R,ti),e(R,Ln),e(Ln,oi),e(R,ai),e(R,on),e(on,ni),e(R,si),e(ze,ri),e(ze,On),e(On,an),e(an,nn),e(nn,ii),e(an,li),e(ze,di),e(ze,Sn),e(Sn,Lo),e(Lo,ci),e(Lo,Oo),e(Oo,pi),e(Lo,hi),e(ze,mi),e(ze,Wn),e(Wn,sn),e(sn,rn),e(rn,fi),e(sn,ui),_(o,Xs,g),_(o,pt,g),e(pt,gi),e(pt,So),e(So,_i),e(pt,vi),e(pt,Wo),e(Wo,Ti),e(pt,bi),_(o,Zs,g),_(o,Rt,g),e(Rt,wi),e(Rt,Bo),e(Bo,yi),e(Rt,$i),_(o,Qs,g),_(o,kt,g),e(kt,Ht),e(Ht,Bn),$(Uo,Bn,null),e(kt,xi),e(kt,Un),e(Un,Ei),_(o,Ys,g),_(o,Ie,g),$(Ro,Ie,null),e(Ie,ki),e(Ie,Ft),e(Ft,Fi),e(Ft,ln),e(ln,Vi),e(Ft,Ii),e(Ft,Ho),e(Ho,Mi),e(Ft,ji),e(Ie,Ci),e(Ie,Vt),e(Vt,Pi),e(Vt,dn),e(dn,Ai),e(Vt,qi),e(Vt,cn),e(cn,zi),e(Vt,Ni),e(Ie,Di),$(Kt,Ie,null),_(o,er,g),_(o,It,g),e(It,Jt),e(Jt,Rn),$(Ko,Rn,null),e(It,Li),e(It,Hn),e(Hn,Oi),_(o,tr,g),_(o,Me,g),$(Jo,Me,null),e(Me,Si),e(Me,Kn),e(Kn,Wi),e(Me,Bi),e(Me,Go),e(Go,Ui),e(Go,pn),e(pn,Ri),e(Go,Hi),e(Me,Ki),e(Me,ht),$(Xo,ht,null),e(ht,Ji),e(ht,Jn),e(Jn,Gi),e(ht,Xi),$(Gt,ht,null),_(o,or,g),_(o,Mt,g),e(Mt,Xt),e(Xt,Gn),$(Zo,Gn,null),e(Mt,Zi),e(Mt,Xn),e(Xn,Qi),_(o,ar,g),_(o,it,g),$(Qo,it,null),e(it,Yi),e(it,Yo),e(Yo,el),e(Yo,ea),e(ea,tl),e(Yo,ol),e(it,al),e(it,Ne),$(ta,Ne,null),e(Ne,nl),e(Ne,jt),e(jt,sl),e(jt,hn),e(hn,rl),e(jt,il),e(jt,Zn),e(Zn,ll),e(jt,dl),e(Ne,cl),$(Zt,Ne,null),e(Ne,pl),$(Qt,Ne,null),_(o,nr,g),_(o,Ct,g),e(Ct,Yt),e(Yt,Qn),$(oa,Qn,null),e(Ct,hl),e(Ct,Yn),e(Yn,ml),_(o,sr,g),_(o,ge,g),$(aa,ge,null),e(ge,fl),e(ge,na),e(na,ul),e(na,sa),e(sa,gl),e(na,_l),e(ge,vl),$(eo,ge,null),e(ge,Tl),e(ge,ra),e(ra,bl),e(ra,ia),e(ia,wl),e(ra,yl),e(ge,$l),e(ge,De),$(la,De,null),e(De,xl),e(De,Pt),e(Pt,El),e(Pt,mn),e(mn,kl),e(Pt,Fl),e(Pt,es),e(es,Vl),e(Pt,Il),e(De,Ml),$(to,De,null),e(De,jl),$(oo,De,null),_(o,rr,g),_(o,At,g),e(At,ao),e(ao,ts),$(da,ts,null),e(At,Cl),e(At,os),e(os,Pl),_(o,ir,g),_(o,_e,g),$(ca,_e,null),e(_e,Al),e(_e,as),e(as,ql),e(_e,zl),$(no,_e,null),e(_e,Nl),e(_e,pa),e(pa,Dl),e(pa,ha),e(ha,Ll),e(pa,Ol),e(_e,Sl),e(_e,Le),$(ma,Le,null),e(Le,Wl),e(Le,qt),e(qt,Bl),e(qt,fn),e(fn,Ul),e(qt,Rl),e(qt,ns),e(ns,Hl),e(qt,Kl),e(Le,Jl),$(so,Le,null),e(Le,Gl),$(ro,Le,null),_(o,lr,g),_(o,zt,g),e(zt,io),e(io,ss),$(fa,ss,null),e(zt,Xl),e(zt,rs),e(rs,Zl),_(o,dr,g),_(o,te,g),$(ua,te,null),e(te,Ql),e(te,is),e(is,Yl),e(te,ed),e(te,ga),e(ga,td),e(ga,un),e(un,od),e(ga,ad),e(te,nd),e(te,_a),e(_a,sd),e(_a,va),e(va,rd),e(_a,id),e(te,ld),$(lo,te,null),e(te,dd),e(te,Oe),$(Ta,Oe,null),e(Oe,cd),e(Oe,Nt),e(Nt,pd),e(Nt,gn),e(gn,hd),e(Nt,md),e(Nt,ls),e(ls,fd),e(Nt,ud),e(Oe,gd),$(co,Oe,null),e(Oe,_d),$(po,Oe,null),_(o,cr,g),_(o,Dt,g),e(Dt,ho),e(ho,ds),$(ba,ds,null),e(Dt,vd),e(Dt,cs),e(cs,Td),_(o,pr,g),_(o,K,g),$(wa,K,null),e(K,bd),e(K,ps),e(ps,wd),e(K,yd),$(mo,K,null),e(K,$d),e(K,ya),e(ya,xd),e(ya,_n),e(_n,Ed),e(ya,kd),e(K,Fd),e(K,$a),e($a,Vd),e($a,xa),e(xa,Id),e($a,Md),e(K,jd),$(fo,K,null),e(K,Cd),e(K,Se),$(Ea,Se,null),e(Se,Pd),e(Se,Lt),e(Lt,Ad),e(Lt,vn),e(vn,qd),e(Lt,zd),e(Lt,hs),e(hs,Nd),e(Lt,Dd),e(Se,Ld),$(uo,Se,null),e(Se,Od),$(go,Se,null),_(o,hr,g),_(o,Ot,g),e(Ot,_o),e(_o,ms),$(ka,ms,null),e(Ot,Sd),e(Ot,fs),e(fs,Wd),_(o,mr,g),_(o,J,g),$(Fa,J,null),e(J,Bd),e(J,us),e(us,Ud),e(J,Rd),e(J,Va),e(Va,Hd),e(Va,Tn),e(Tn,Kd),e(Va,Jd),e(J,Gd),e(J,Ia),e(Ia,Xd),e(Ia,Ma),e(Ma,Zd),e(Ia,Qd),e(J,Yd),e(J,gs),e(gs,ec),e(J,tc),e(J,lt),e(lt,_s),e(_s,ja),e(ja,oc),e(lt,ac),e(lt,vs),e(vs,Ca),e(Ca,nc),e(lt,sc),e(lt,Ts),e(Ts,Pa),e(Pa,rc),e(lt,ic),e(lt,bs),e(bs,Aa),e(Aa,lc),e(J,dc),e(J,We),$(qa,We,null),e(We,cc),e(We,St),e(St,pc),e(St,ws),e(ws,hc),e(St,mc),e(St,ys),e(ys,fc),e(St,uc),e(We,gc),$(vo,We,null),e(We,_c),$(To,We,null),_(o,fr,g),_(o,Wt,g),e(Wt,bo),e(bo,$s),$(za,$s,null),e(Wt,vc),e(Wt,xs),e(xs,Tc),_(o,ur,g),_(o,G,g),$(Na,G,null),e(G,bc),e(G,Es),e(Es,wc),e(G,yc),e(G,Da),e(Da,$c),e(Da,bn),e(bn,xc),e(Da,Ec),e(G,kc),e(G,La),e(La,Fc),e(La,Oa),e(Oa,Vc),e(La,Ic),e(G,Mc),e(G,ks),e(ks,jc),e(G,Cc),e(G,dt),e(dt,Fs),e(Fs,Sa),e(Sa,Pc),e(dt,Ac),e(dt,Vs),e(Vs,Wa),e(Wa,qc),e(dt,zc),e(dt,Is),e(Is,Ba),e(Ba,Nc),e(dt,Dc),e(dt,Ms),e(Ms,Ua),e(Ua,Lc),e(G,Oc),e(G,Be),$(Ra,Be,null),e(Be,Sc),e(Be,Bt),e(Bt,Wc),e(Bt,js),e(js,Bc),e(Bt,Uc),e(Bt,Cs),e(Cs,Rc),e(Bt,Hc),e(Be,Kc),$(wo,Be,null),e(Be,Jc),$(yo,Be,null),gr=!0},p(o,[g]){const Ha={};g&2&&(Ha.$$scope={dirty:g,ctx:o}),Kt.$set(Ha);const Ps={};g&2&&(Ps.$$scope={dirty:g,ctx:o}),Gt.$set(Ps);const As={};g&2&&(As.$$scope={dirty:g,ctx:o}),Zt.$set(As);const qs={};g&2&&(qs.$$scope={dirty:g,ctx:o}),Qt.$set(qs);const Ka={};g&2&&(Ka.$$scope={dirty:g,ctx:o}),eo.$set(Ka);const zs={};g&2&&(zs.$$scope={dirty:g,ctx:o}),to.$set(zs);const Ns={};g&2&&(Ns.$$scope={dirty:g,ctx:o}),oo.$set(Ns);const Ds={};g&2&&(Ds.$$scope={dirty:g,ctx:o}),no.$set(Ds);const Ja={};g&2&&(Ja.$$scope={dirty:g,ctx:o}),so.$set(Ja);const Ls={};g&2&&(Ls.$$scope={dirty:g,ctx:o}),ro.$set(Ls);const Os={};g&2&&(Os.$$scope={dirty:g,ctx:o}),lo.$set(Os);const Ss={};g&2&&(Ss.$$scope={dirty:g,ctx:o}),co.$set(Ss);const Ws={};g&2&&(Ws.$$scope={dirty:g,ctx:o}),po.$set(Ws);const Bs={};g&2&&(Bs.$$scope={dirty:g,ctx:o}),mo.$set(Bs);const oe={};g&2&&(oe.$$scope={dirty:g,ctx:o}),fo.$set(oe);const Ga={};g&2&&(Ga.$$scope={dirty:g,ctx:o}),uo.$set(Ga);const Us={};g&2&&(Us.$$scope={dirty:g,ctx:o}),go.$set(Us);const Rs={};g&2&&(Rs.$$scope={dirty:g,ctx:o}),vo.$set(Rs);const Xa={};g&2&&(Xa.$$scope={dirty:g,ctx:o}),To.$set(Xa);const Hs={};g&2&&(Hs.$$scope={dirty:g,ctx:o}),wo.$set(Hs);const Ut={};g&2&&(Ut.$$scope={dirty:g,ctx:o}),yo.$set(Ut)},i(o){gr||(x(l.$$.fragment,o),x(I.$$.fragment,o),x(Uo.$$.fragment,o),x(Ro.$$.fragment,o),x(Kt.$$.fragment,o),x(Ko.$$.fragment,o),x(Jo.$$.fragment,o),x(Xo.$$.fragment,o),x(Gt.$$.fragment,o),x(Zo.$$.fragment,o),x(Qo.$$.fragment,o),x(ta.$$.fragment,o),x(Zt.$$.fragment,o),x(Qt.$$.fragment,o),x(oa.$$.fragment,o),x(aa.$$.fragment,o),x(eo.$$.fragment,o),x(la.$$.fragment,o),x(to.$$.fragment,o),x(oo.$$.fragment,o),x(da.$$.fragment,o),x(ca.$$.fragment,o),x(no.$$.fragment,o),x(ma.$$.fragment,o),x(so.$$.fragment,o),x(ro.$$.fragment,o),x(fa.$$.fragment,o),x(ua.$$.fragment,o),x(lo.$$.fragment,o),x(Ta.$$.fragment,o),x(co.$$.fragment,o),x(po.$$.fragment,o),x(ba.$$.fragment,o),x(wa.$$.fragment,o),x(mo.$$.fragment,o),x(fo.$$.fragment,o),x(Ea.$$.fragment,o),x(uo.$$.fragment,o),x(go.$$.fragment,o),x(ka.$$.fragment,o),x(Fa.$$.fragment,o),x(qa.$$.fragment,o),x(vo.$$.fragment,o),x(To.$$.fragment,o),x(za.$$.fragment,o),x(Na.$$.fragment,o),x(Ra.$$.fragment,o),x(wo.$$.fragment,o),x(yo.$$.fragment,o),gr=!0)},o(o){E(l.$$.fragment,o),E(I.$$.fragment,o),E(Uo.$$.fragment,o),E(Ro.$$.fragment,o),E(Kt.$$.fragment,o),E(Ko.$$.fragment,o),E(Jo.$$.fragment,o),E(Xo.$$.fragment,o),E(Gt.$$.fragment,o),E(Zo.$$.fragment,o),E(Qo.$$.fragment,o),E(ta.$$.fragment,o),E(Zt.$$.fragment,o),E(Qt.$$.fragment,o),E(oa.$$.fragment,o),E(aa.$$.fragment,o),E(eo.$$.fragment,o),E(la.$$.fragment,o),E(to.$$.fragment,o),E(oo.$$.fragment,o),E(da.$$.fragment,o),E(ca.$$.fragment,o),E(no.$$.fragment,o),E(ma.$$.fragment,o),E(so.$$.fragment,o),E(ro.$$.fragment,o),E(fa.$$.fragment,o),E(ua.$$.fragment,o),E(lo.$$.fragment,o),E(Ta.$$.fragment,o),E(co.$$.fragment,o),E(po.$$.fragment,o),E(ba.$$.fragment,o),E(wa.$$.fragment,o),E(mo.$$.fragment,o),E(fo.$$.fragment,o),E(Ea.$$.fragment,o),E(uo.$$.fragment,o),E(go.$$.fragment,o),E(ka.$$.fragment,o),E(Fa.$$.fragment,o),E(qa.$$.fragment,o),E(vo.$$.fragment,o),E(To.$$.fragment,o),E(za.$$.fragment,o),E(Na.$$.fragment,o),E(Ra.$$.fragment,o),E(wo.$$.fragment,o),E(yo.$$.fragment,o),gr=!1},d(o){t(d),o&&t(T),o&&t(f),k(l),o&&t(C),o&&t(q),k(I),o&&t(Ce),o&&t(U),o&&t(Pe),o&&t(X),o&&t(Ae),o&&t(Z),o&&t(ve),o&&t(A),o&&t(qe),o&&t(P),o&&t(be),o&&t(we),o&&t(Ks),o&&t(Do),o&&t(Js),o&&t(Qa),o&&t(Gs),o&&t(ze),o&&t(Xs),o&&t(pt),o&&t(Zs),o&&t(Rt),o&&t(Qs),o&&t(kt),k(Uo),o&&t(Ys),o&&t(Ie),k(Ro),k(Kt),o&&t(er),o&&t(It),k(Ko),o&&t(tr),o&&t(Me),k(Jo),k(Xo),k(Gt),o&&t(or),o&&t(Mt),k(Zo),o&&t(ar),o&&t(it),k(Qo),k(ta),k(Zt),k(Qt),o&&t(nr),o&&t(Ct),k(oa),o&&t(sr),o&&t(ge),k(aa),k(eo),k(la),k(to),k(oo),o&&t(rr),o&&t(At),k(da),o&&t(ir),o&&t(_e),k(ca),k(no),k(ma),k(so),k(ro),o&&t(lr),o&&t(zt),k(fa),o&&t(dr),o&&t(te),k(ua),k(lo),k(Ta),k(co),k(po),o&&t(cr),o&&t(Dt),k(ba),o&&t(pr),o&&t(K),k(wa),k(mo),k(fo),k(Ea),k(uo),k(go),o&&t(hr),o&&t(Ot),k(ka),o&&t(mr),o&&t(J),k(Fa),k(qa),k(vo),k(To),o&&t(fr),o&&t(Wt),k(za),o&&t(ur),o&&t(G),k(Na),k(Ra),k(wo),k(yo)}}}const Im={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function Mm(V){return rm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nm extends tm{constructor(d){super();om(this,d,Mm,Vm,am,{})}}export{Nm as default,Im as metadata};
