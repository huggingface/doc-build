import{S as Th,i as bh,s as wh,e as n,k as p,w,t as a,M as yh,c as r,d as t,m,a as i,x as y,h as s,b as c,N as $h,G as e,g as _,y as $,q as x,o as E,B as V,v as xh,L as No}from"../../chunks/vendor-hf-doc-builder.js";import{T as We}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Do}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as qo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Eh(F){let d,T,f,u,v;return u=new Do({props:{code:`from transformers import ViTConfig, ViTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,T),_(l,f,h),$(u,l,h),v=!0},p:No,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),V(u,l)}}}function Vh(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var k=i(f);u=s(k,"Module"),k.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function kh(F){let d,T,f,u,v;return u=new Do({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,T),_(l,f,h),$(u,l,h),v=!0},p:No,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),V(u,l)}}}function Fh(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Note that we provide a script to pre-train this model on custom data in our "),f=n("a"),u=a(`examples
directory`),v=a("."),this.h()},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Note that we provide a script to pre-train this model on custom data in our "),f=r(h,"A",{href:!0,rel:!0});var k=i(f);u=s(k,`examples
directory`),k.forEach(t),v=s(h,"."),h.forEach(t),this.h()},h(){c(f,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),c(f,"rel","nofollow")},m(l,h){_(l,d,h),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Ih(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var k=i(f);u=s(k,"Module"),k.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Mh(F){let d,T,f,u,v;return u=new Do({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=n("p"),T=a("Examples:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Examples:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,T),_(l,f,h),$(u,l,h),v=!0},p:No,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),V(u,l)}}}function jh(F){let d,T,f,u,v,l,h,k;return{c(){d=n("p"),T=a(`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=n("code"),u=a("interpolate_pos_encoding"),v=a(" to "),l=n("code"),h=a("True"),k=a(` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`)},l(q){d=r(q,"P",{});var P=i(d);T=s(P,`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=r(P,"CODE",{});var A=i(f);u=s(A,"interpolate_pos_encoding"),A.forEach(t),v=s(P," to "),l=r(P,"CODE",{});var D=i(l);h=s(D,"True"),D.forEach(t),k=s(P,` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`),P.forEach(t)},m(q,P){_(q,d,P),e(d,T),e(d,f),e(f,u),e(d,v),e(d,l),e(l,h),e(d,k)},d(q){q&&t(d)}}}function Ph(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var k=i(f);u=s(k,"Module"),k.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Ch(F){let d,T,f,u,v;return u=new Do({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
Egyptian cat`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,T),_(l,f,h),$(u,l,h),v=!0},p:No,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),V(u,l)}}}function zh(F){let d,T,f,u,v,l,h,k,q,P,A,D,ne,I,Be,Z,He,Me,U,Ke,re,ie,Je,je,Q,Ge,Pe,Y,Ee,Xe,ve,z,L,Ce,C,le,Qe,H,Ye,Ze,O,Ve,de,et,ce,pe,Te,tt,ee,ot,S,at,me,R,st,N,nt,rt;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=p(),h=n("ul"),k=n("li"),q=a("having all inputs as keyword arguments (like PyTorch models), or"),P=p(),A=n("li"),D=a("having all inputs as a list, tuple or dict in the first positional argument."),ne=p(),I=n("p"),Be=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=n("code"),He=a("model.fit()"),Me=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=n("code"),Ke=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),Je=a("fit()"),je=a(" and "),Q=n("code"),Ge=a("predict()"),Pe=a(`, such as when creating your own layers or models with
the Keras `),Y=n("code"),Ee=a("Functional"),Xe=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=p(),z=n("ul"),L=n("li"),Ce=a("a single Tensor with "),C=n("code"),le=a("pixel_values"),Qe=a(" only and nothing else: "),H=n("code"),Ye=a("model(pixel_values)"),Ze=p(),O=n("li"),Ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),et=a("model([pixel_values, attention_mask])"),ce=a(" or "),pe=n("code"),Te=a("model([pixel_values, attention_mask, token_type_ids])"),tt=p(),ee=n("li"),ot=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),at=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),me=p(),R=n("p"),st=a(`Note that when creating models and layers with
`),N=n("a"),nt=a("subclassing"),rt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var M=i(d);T=s(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var ut=i(f);u=s(ut,"transformers"),ut.forEach(t),v=s(M," accept two formats as input:"),M.forEach(t),l=m(b),h=r(b,"UL",{});var te=i(h);k=r(te,"LI",{});var gt=i(k);q=s(gt,"having all inputs as keyword arguments (like PyTorch models), or"),gt.forEach(t),P=m(te),A=r(te,"LI",{});var _t=i(A);D=s(_t,"having all inputs as a list, tuple or dict in the first positional argument."),_t.forEach(t),te.forEach(t),ne=m(b),I=r(b,"P",{});var j=i(I);Be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=r(j,"CODE",{});var vt=i(Z);He=s(vt,"model.fit()"),vt.forEach(t),Me=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Tt=i(U);Ke=s(Tt,"model.fit()"),Tt.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=r(j,"CODE",{});var bt=i(ie);Je=s(bt,"fit()"),bt.forEach(t),je=s(j," and "),Q=r(j,"CODE",{});var he=i(Q);Ge=s(he,"predict()"),he.forEach(t),Pe=s(j,`, such as when creating your own layers or models with
the Keras `),Y=r(j,"CODE",{});var wt=i(Y);Ee=s(wt,"Functional"),wt.forEach(t),Xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ve=m(b),z=r(b,"UL",{});var W=i(z);L=r(W,"LI",{});var fe=i(L);Ce=s(fe,"a single Tensor with "),C=r(fe,"CODE",{});var yt=i(C);le=s(yt,"pixel_values"),yt.forEach(t),Qe=s(fe," only and nothing else: "),H=r(fe,"CODE",{});var ke=i(H);Ye=s(ke,"model(pixel_values)"),ke.forEach(t),fe.forEach(t),Ze=m(W),O=r(W,"LI",{});var ue=i(O);Ve=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var $t=i(de);et=s($t,"model([pixel_values, attention_mask])"),$t.forEach(t),ce=s(ue," or "),pe=r(ue,"CODE",{});var xt=i(pe);Te=s(xt,"model([pixel_values, attention_mask, token_type_ids])"),xt.forEach(t),ue.forEach(t),tt=m(W),ee=r(W,"LI",{});var Fe=i(ee);ot=s(Fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Fe,"CODE",{});var Et=i(S);at=s(Et,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),Et.forEach(t),Fe.forEach(t),W.forEach(t),me=m(b),R=r(b,"P",{});var be=i(R);st=s(be,`Note that when creating models and layers with
`),N=r(be,"A",{href:!0,rel:!0});var we=i(N);nt=s(we,"subclassing"),we.forEach(t),rt=s(be,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),be.forEach(t),this.h()},h(){c(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(N,"rel","nofollow")},m(b,M){_(b,d,M),e(d,T),e(d,f),e(f,u),e(d,v),_(b,l,M),_(b,h,M),e(h,k),e(k,q),e(h,P),e(h,A),e(A,D),_(b,ne,M),_(b,I,M),e(I,Be),e(I,Z),e(Z,He),e(I,Me),e(I,U),e(U,Ke),e(I,re),e(I,ie),e(ie,Je),e(I,je),e(I,Q),e(Q,Ge),e(I,Pe),e(I,Y),e(Y,Ee),e(I,Xe),_(b,ve,M),_(b,z,M),e(z,L),e(L,Ce),e(L,C),e(C,le),e(L,Qe),e(L,H),e(H,Ye),e(z,Ze),e(z,O),e(O,Ve),e(O,de),e(de,et),e(O,ce),e(O,pe),e(pe,Te),e(z,tt),e(z,ee),e(ee,ot),e(ee,S),e(S,at),_(b,me,M),_(b,R,M),e(R,st),e(R,N),e(N,nt),e(R,rt)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ne),b&&t(I),b&&t(ve),b&&t(z),b&&t(me),b&&t(R)}}}function Ah(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var k=i(f);u=s(k,"Module"),k.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function qh(F){let d,T,f,u,v;return u=new Do({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,T),_(l,f,h),$(u,l,h),v=!0},p:No,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),V(u,l)}}}function Nh(F){let d,T,f,u,v,l,h,k;return{c(){d=n("p"),T=a(`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=n("code"),u=a("interpolate_pos_encoding"),v=a(" to "),l=n("code"),h=a("True"),k=a(` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`)},l(q){d=r(q,"P",{});var P=i(d);T=s(P,`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=r(P,"CODE",{});var A=i(f);u=s(A,"interpolate_pos_encoding"),A.forEach(t),v=s(P," to "),l=r(P,"CODE",{});var D=i(l);h=s(D,"True"),D.forEach(t),k=s(P,` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`),P.forEach(t)},m(q,P){_(q,d,P),e(d,T),e(d,f),e(f,u),e(d,v),e(d,l),e(l,h),e(d,k)},d(q){q&&t(d)}}}function Dh(F){let d,T,f,u,v,l,h,k,q,P,A,D,ne,I,Be,Z,He,Me,U,Ke,re,ie,Je,je,Q,Ge,Pe,Y,Ee,Xe,ve,z,L,Ce,C,le,Qe,H,Ye,Ze,O,Ve,de,et,ce,pe,Te,tt,ee,ot,S,at,me,R,st,N,nt,rt;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=p(),h=n("ul"),k=n("li"),q=a("having all inputs as keyword arguments (like PyTorch models), or"),P=p(),A=n("li"),D=a("having all inputs as a list, tuple or dict in the first positional argument."),ne=p(),I=n("p"),Be=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=n("code"),He=a("model.fit()"),Me=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=n("code"),Ke=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),Je=a("fit()"),je=a(" and "),Q=n("code"),Ge=a("predict()"),Pe=a(`, such as when creating your own layers or models with
the Keras `),Y=n("code"),Ee=a("Functional"),Xe=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=p(),z=n("ul"),L=n("li"),Ce=a("a single Tensor with "),C=n("code"),le=a("pixel_values"),Qe=a(" only and nothing else: "),H=n("code"),Ye=a("model(pixel_values)"),Ze=p(),O=n("li"),Ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),et=a("model([pixel_values, attention_mask])"),ce=a(" or "),pe=n("code"),Te=a("model([pixel_values, attention_mask, token_type_ids])"),tt=p(),ee=n("li"),ot=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),at=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),me=p(),R=n("p"),st=a(`Note that when creating models and layers with
`),N=n("a"),nt=a("subclassing"),rt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var M=i(d);T=s(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var ut=i(f);u=s(ut,"transformers"),ut.forEach(t),v=s(M," accept two formats as input:"),M.forEach(t),l=m(b),h=r(b,"UL",{});var te=i(h);k=r(te,"LI",{});var gt=i(k);q=s(gt,"having all inputs as keyword arguments (like PyTorch models), or"),gt.forEach(t),P=m(te),A=r(te,"LI",{});var _t=i(A);D=s(_t,"having all inputs as a list, tuple or dict in the first positional argument."),_t.forEach(t),te.forEach(t),ne=m(b),I=r(b,"P",{});var j=i(I);Be=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=r(j,"CODE",{});var vt=i(Z);He=s(vt,"model.fit()"),vt.forEach(t),Me=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var Tt=i(U);Ke=s(Tt,"model.fit()"),Tt.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=r(j,"CODE",{});var bt=i(ie);Je=s(bt,"fit()"),bt.forEach(t),je=s(j," and "),Q=r(j,"CODE",{});var he=i(Q);Ge=s(he,"predict()"),he.forEach(t),Pe=s(j,`, such as when creating your own layers or models with
the Keras `),Y=r(j,"CODE",{});var wt=i(Y);Ee=s(wt,"Functional"),wt.forEach(t),Xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ve=m(b),z=r(b,"UL",{});var W=i(z);L=r(W,"LI",{});var fe=i(L);Ce=s(fe,"a single Tensor with "),C=r(fe,"CODE",{});var yt=i(C);le=s(yt,"pixel_values"),yt.forEach(t),Qe=s(fe," only and nothing else: "),H=r(fe,"CODE",{});var ke=i(H);Ye=s(ke,"model(pixel_values)"),ke.forEach(t),fe.forEach(t),Ze=m(W),O=r(W,"LI",{});var ue=i(O);Ve=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var $t=i(de);et=s($t,"model([pixel_values, attention_mask])"),$t.forEach(t),ce=s(ue," or "),pe=r(ue,"CODE",{});var xt=i(pe);Te=s(xt,"model([pixel_values, attention_mask, token_type_ids])"),xt.forEach(t),ue.forEach(t),tt=m(W),ee=r(W,"LI",{});var Fe=i(ee);ot=s(Fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Fe,"CODE",{});var Et=i(S);at=s(Et,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),Et.forEach(t),Fe.forEach(t),W.forEach(t),me=m(b),R=r(b,"P",{});var be=i(R);st=s(be,`Note that when creating models and layers with
`),N=r(be,"A",{href:!0,rel:!0});var we=i(N);nt=s(we,"subclassing"),we.forEach(t),rt=s(be,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),be.forEach(t),this.h()},h(){c(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(N,"rel","nofollow")},m(b,M){_(b,d,M),e(d,T),e(d,f),e(f,u),e(d,v),_(b,l,M),_(b,h,M),e(h,k),e(k,q),e(h,P),e(h,A),e(A,D),_(b,ne,M),_(b,I,M),e(I,Be),e(I,Z),e(Z,He),e(I,Me),e(I,U),e(U,Ke),e(I,re),e(I,ie),e(ie,Je),e(I,je),e(I,Q),e(Q,Ge),e(I,Pe),e(I,Y),e(Y,Ee),e(I,Xe),_(b,ve,M),_(b,z,M),e(z,L),e(L,Ce),e(L,C),e(C,le),e(L,Qe),e(L,H),e(H,Ye),e(z,Ze),e(z,O),e(O,Ve),e(O,de),e(de,et),e(O,ce),e(O,pe),e(pe,Te),e(z,tt),e(z,ee),e(ee,ot),e(ee,S),e(S,at),_(b,me,M),_(b,R,M),e(R,st),e(R,N),e(N,nt),e(R,rt)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ne),b&&t(I),b&&t(ve),b&&t(z),b&&t(me),b&&t(R)}}}function Lh(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var k=i(f);u=s(k,"Module"),k.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Oh(F){let d,T,f,u,v;return u=new Do({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
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
Egyptian cat`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,T),_(l,f,h),$(u,l,h),v=!0},p:No,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),V(u,l)}}}function Sh(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var k=i(f);u=s(k,"Module"),k.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Rh(F){let d,T,f,u,v;return u=new Do({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=a("Examples:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Examples:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,T),_(l,f,h),$(u,l,h),v=!0},p:No,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),V(u,l)}}}function Wh(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var k=i(f);u=s(k,"Module"),k.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Uh(F){let d,T,f,u,v;return u=new Do({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);T=s(h,"Example:"),h.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,h){_(l,d,h),e(d,T),_(l,f,h),$(u,l,h),v=!0},p:No,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),V(u,l)}}}function Bh(F){let d,T,f,u,v,l,h,k,q,P,A,D,ne,I,Be,Z,He,Me,U,Ke,re,ie,Je,je,Q,Ge,Pe,Y,Ee,Xe,ve,z,L,Ce,C,le,Qe,H,Ye,Ze,O,Ve,de,et,ce,pe,Te,tt,ee,ot,S,at,me,R,st,N,nt,rt,b,M,ut,te,gt,_t,j,vt,Tt,bt,he,wt,W,fe,yt,ke,ue,$t,xt,Fe,Et,be,we,mp,tr,Lo,Zr,es,ei,or,ts,ti,ar,ze,Ds,B,os,oi,ai,as,si,ni,ss,ri,ii,Ls,li,di,Os,ci,pi,Ss,mi,hi,Rs,fi,ui,ns,gi,_i,vi,Ws,rs,is,Ti,bi,wi,Us,Oo,yi,So,$i,xi,Ei,Bs,ls,ds,Vi,ki,sr,mt,Fi,Ro,Ii,Mi,Wo,ji,Pi,nr,Bt,Ci,Uo,zi,Ai,rr,Vt,Ht,Hs,Bo,qi,Ks,Ni,ir,Ie,Ho,Di,kt,Li,cs,Oi,Si,Ko,Ri,Wi,Ui,Ft,Bi,ps,Hi,Ki,ms,Ji,Gi,Xi,Kt,lr,It,Jt,Js,Jo,Qi,Gs,Yi,dr,it,Go,Zi,Xs,el,tl,Gt,Xo,ol,Qs,al,cr,Mt,Xt,Ys,Qo,sl,Zs,nl,pr,lt,Yo,rl,en,il,ll,Qt,Zo,dl,tn,cl,mr,jt,Yt,on,ea,pl,an,ml,hr,dt,ta,hl,oa,fl,aa,ul,gl,_l,Ae,sa,vl,Pt,Tl,hs,bl,wl,sn,yl,$l,xl,Zt,El,eo,fr,Ct,to,nn,na,Vl,rn,kl,ur,ge,ra,Fl,ia,Il,la,Ml,jl,Pl,oo,Cl,da,zl,ca,Al,ql,Nl,qe,pa,Dl,zt,Ll,fs,Ol,Sl,ln,Rl,Wl,Ul,ao,Bl,so,gr,At,no,dn,ma,Hl,cn,Kl,_r,_e,ha,Jl,pn,Gl,Xl,ro,Ql,fa,Yl,ua,Zl,ed,td,Ne,ga,od,qt,ad,us,sd,nd,mn,rd,id,ld,io,dd,lo,vr,Nt,co,hn,_a,cd,fn,pd,Tr,oe,va,md,un,hd,fd,Ta,ud,gs,gd,_d,vd,ba,Td,wa,bd,wd,yd,po,$d,De,ya,xd,Dt,Ed,_s,Vd,kd,gn,Fd,Id,Md,mo,jd,ho,br,Lt,fo,_n,$a,Pd,vn,Cd,wr,K,xa,zd,Tn,Ad,qd,uo,Nd,Ea,Dd,vs,Ld,Od,Sd,Va,Rd,ka,Wd,Ud,Bd,go,Hd,Le,Fa,Kd,Ot,Jd,Ts,Gd,Xd,bn,Qd,Yd,Zd,_o,ec,vo,yr,St,To,wn,Ia,tc,yn,oc,$r,J,Ma,ac,$n,sc,nc,ja,rc,bs,ic,lc,dc,Pa,cc,Ca,pc,mc,hc,xn,fc,uc,ct,En,za,gc,_c,Vn,Aa,vc,Tc,kn,qa,bc,wc,Fn,Na,yc,$c,Oe,Da,xc,Rt,Ec,In,Vc,kc,Mn,Fc,Ic,Mc,bo,jc,wo,xr,Wt,yo,jn,La,Pc,Pn,Cc,Er,G,Oa,zc,Cn,Ac,qc,Sa,Nc,ws,Dc,Lc,Oc,Ra,Sc,Wa,Rc,Wc,Uc,zn,Bc,Hc,pt,An,Ua,Kc,Jc,qn,Ba,Gc,Xc,Nn,Ha,Qc,Yc,Dn,Ka,Zc,ep,Se,Ja,tp,Ut,op,Ln,ap,sp,On,np,rp,ip,$o,lp,xo,Vr;return l=new Ue({}),I=new Ue({}),Bo=new Ue({}),Ho=new X({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/configuration_vit.py#L35"}}),Kt=new qo({props:{anchor:"transformers.ViTConfig.example",$$slots:{default:[Eh]},$$scope:{ctx:F}}}),Jo=new Ue({}),Go=new X({props:{name:"class transformers.ViTImageProcessor",anchor:"transformers.ViTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Union[typing.Dict[str, int], NoneType] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be overridden by the <code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.ViTImageProcessor.size",description:`<strong>size</strong> (<code>dict</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the output image after resizing. Can be overridden by the <code>size</code> parameter in the <code>preprocess</code>
method.`,name:"size"},{anchor:"transformers.ViTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.ViTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.ViTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter in the
<code>preprocess</code> method.
do_normalize &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"rescale_factor"},{anchor:"transformers.ViTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.ViTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/image_processing_vit.py#L41"}}),Xo=new X({props:{name:"__call__",anchor:"transformers.ViTImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L435"}}),Qo=new Ue({}),Yo=new X({props:{name:"class transformers.ViTImageProcessor",anchor:"transformers.ViTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Union[typing.Dict[str, int], NoneType] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be overridden by the <code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.ViTImageProcessor.size",description:`<strong>size</strong> (<code>dict</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the output image after resizing. Can be overridden by the <code>size</code> parameter in the <code>preprocess</code>
method.`,name:"size"},{anchor:"transformers.ViTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.ViTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.ViTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter in the
<code>preprocess</code> method.
do_normalize &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"rescale_factor"},{anchor:"transformers.ViTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.ViTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/image_processing_vit.py#L41"}}),Zo=new X({props:{name:"preprocess",anchor:"transformers.ViTImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": typing.Optional[bool] = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_rescale",val:": typing.Optional[bool] = None"},{name:"rescale_factor",val:": typing.Optional[float] = None"},{name:"do_normalize",val:": typing.Optional[bool] = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension] = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.ViTImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.ViTImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Dictionary in the format <code>{&quot;height&quot;: h, &quot;width&quot;: w}</code> specifying the size of the output image after
resizing.`,name:"size"},{anchor:"transformers.ViTImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code> filter, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
<code>PILImageResampling</code> filter to use if resizing the image e.g. <code>PILImageResampling.BILINEAR</code>. Only has
an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image values between [0 - 1].`,name:"do_rescale"},{anchor:"transformers.ViTImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.ViTImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.ViTImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean to use if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_mean"},{anchor:"transformers.ViTImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation to use if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_std"},{anchor:"transformers.ViTImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.ViTImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>&quot;channels_first&quot;</code> or <code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>&quot;channels_last&quot;</code> or <code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li>Unset: Use the channel dimension format of the input image.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/image_processing_vit.py#L183"}}),ea=new Ue({}),ta=new X({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L501"}}),sa=new X({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),Zt=new We({props:{$$slots:{default:[Vh]},$$scope:{ctx:F}}}),eo=new qo({props:{anchor:"transformers.ViTModel.forward.example",$$slots:{default:[kh]},$$scope:{ctx:F}}}),na=new Ue({}),ra=new X({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L615"}}),oo=new We({props:{$$slots:{default:[Fh]},$$scope:{ctx:F}}}),pa=new X({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),ao=new We({props:{$$slots:{default:[Ih]},$$scope:{ctx:F}}}),so=new qo({props:{anchor:"transformers.ViTForMaskedImageModeling.forward.example",$$slots:{default:[Mh]},$$scope:{ctx:F}}}),ma=new Ue({}),ha=new X({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L737"}}),ro=new We({props:{$$slots:{default:[jh]},$$scope:{ctx:F}}}),ga=new X({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),io=new We({props:{$$slots:{default:[Ph]},$$scope:{ctx:F}}}),lo=new qo({props:{anchor:"transformers.ViTForImageClassification.forward.example",$$slots:{default:[Ch]},$$scope:{ctx:F}}}),_a=new Ue({}),va=new X({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L664"}}),po=new We({props:{$$slots:{default:[zh]},$$scope:{ctx:F}}}),ya=new X({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),mo=new We({props:{$$slots:{default:[Ah]},$$scope:{ctx:F}}}),ho=new qo({props:{anchor:"transformers.TFViTModel.call.example",$$slots:{default:[qh]},$$scope:{ctx:F}}}),$a=new Ue({}),xa=new X({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L750"}}),uo=new We({props:{$$slots:{default:[Nh]},$$scope:{ctx:F}}}),go=new We({props:{$$slots:{default:[Dh]},$$scope:{ctx:F}}}),Fa=new X({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
`}}),_o=new We({props:{$$slots:{default:[Lh]},$$scope:{ctx:F}}}),vo=new qo({props:{anchor:"transformers.TFViTForImageClassification.call.example",$$slots:{default:[Oh]},$$scope:{ctx:F}}}),Ia=new Ue({}),Ma=new X({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L558"}}),Da=new X({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L473",returnDescription:`
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
`}}),bo=new We({props:{$$slots:{default:[Sh]},$$scope:{ctx:F}}}),wo=new qo({props:{anchor:"transformers.FlaxViTModel.__call__.example",$$slots:{default:[Rh]},$$scope:{ctx:F}}}),La=new Ue({}),Oa=new X({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L641"}}),Ja=new X({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L473",returnDescription:`
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
`}}),$o=new We({props:{$$slots:{default:[Wh]},$$scope:{ctx:F}}}),xo=new qo({props:{anchor:"transformers.FlaxViTForImageClassification.__call__.example",$$slots:{default:[Uh]},$$scope:{ctx:F}}}),{c(){d=n("meta"),T=p(),f=n("h1"),u=n("a"),v=n("span"),w(l.$$.fragment),h=p(),k=n("span"),q=a("Vision Transformer (ViT)"),P=p(),A=n("h2"),D=n("a"),ne=n("span"),w(I.$$.fragment),Be=p(),Z=n("span"),He=a("Overview"),Me=p(),U=n("p"),Ke=a("The Vision Transformer (ViT) model was proposed in "),re=n("a"),ie=a(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Je=a(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),je=p(),Q=n("p"),Ge=a("The abstract from the paper is the following:"),Pe=p(),Y=n("p"),Ee=n("em"),Xe=a(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),ve=p(),z=n("p"),L=a("Tips:"),Ce=p(),C=n("ul"),le=n("li"),Qe=a("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),H=n("a"),Ye=a("here"),Ze=a("."),O=p(),Ve=n("li"),de=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),et=p(),ce=n("li"),pe=a(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Te=n("a"),tt=a("ViTFeatureExtractor"),ee=a(" to resize (or rescale) and normalize images for the model."),ot=p(),S=n("li"),at=a(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),me=n("code"),R=a("google/vit-base-patch16-224"),st=a(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),N=n("a"),nt=a("hub"),rt=a("."),b=p(),M=n("li"),ut=a("The available checkpoints are either (1) pre-trained on "),te=n("a"),gt=a("ImageNet-21k"),_t=a(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),j=n("a"),vt=a("ImageNet"),Tt=a(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),bt=p(),he=n("li"),wt=a(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),W=n("a"),fe=a("(Touvron et al., 2019)"),yt=a(", "),ke=n("a"),ue=a(`(Kolesnikov
et al., 2020)`),$t=a(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),xt=p(),Fe=n("li"),Et=a(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),be=p(),we=n("img"),tr=p(),Lo=n("small"),Zr=a("ViT architecture. Taken from the "),es=n("a"),ei=a("original paper."),or=p(),ts=n("p"),ti=a("Following the original Vision Transformer, some follow-up works have been made:"),ar=p(),ze=n("ul"),Ds=n("li"),B=n("p"),os=n("a"),oi=a("DeiT"),ai=a(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),as=n("a"),si=a("ViTModel"),ni=a(` or
`),ss=n("a"),ri=a("ViTForImageClassification"),ii=a(". There are 4 variants available (in 3 different sizes): "),Ls=n("em"),li=a("facebook/deit-tiny-patch16-224"),di=a(`,
`),Os=n("em"),ci=a("facebook/deit-small-patch16-224"),pi=a(", "),Ss=n("em"),mi=a("facebook/deit-base-patch16-224"),hi=a(" and "),Rs=n("em"),fi=a("facebook/deit-base-patch16-384"),ui=a(`. Note that one should
use `),ns=n("a"),gi=a("DeiTFeatureExtractor"),_i=a(" in order to prepare images for the model."),vi=p(),Ws=n("li"),rs=n("p"),is=n("a"),Ti=a("BEiT"),bi=a(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),wi=p(),Us=n("li"),Oo=n("p"),yi=a(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),So=n("a"),$i=a("hub"),xi=a("."),Ei=p(),Bs=n("li"),ls=n("p"),ds=n("a"),Vi=a("MAE"),ki=a(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),sr=p(),mt=n("p"),Fi=a("This model was contributed by "),Ro=n("a"),Ii=a("nielsr"),Mi=a(`. The original code (written in JAX) can be
found `),Wo=n("a"),ji=a("here"),Pi=a("."),nr=p(),Bt=n("p"),Ci=a("Note that we converted the weights from Ross Wightman\u2019s "),Uo=n("a"),zi=a("timm library"),Ai=a(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),rr=p(),Vt=n("h2"),Ht=n("a"),Hs=n("span"),w(Bo.$$.fragment),qi=p(),Ks=n("span"),Ni=a("ViTConfig"),ir=p(),Ie=n("div"),w(Ho.$$.fragment),Di=p(),kt=n("p"),Li=a("This is the configuration class to store the configuration of a "),cs=n("a"),Oi=a("ViTModel"),Si=a(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Ko=n("a"),Ri=a("google/vit-base-patch16-224"),Wi=a(" architecture."),Ui=p(),Ft=n("p"),Bi=a("Configuration objects inherit from "),ps=n("a"),Hi=a("PretrainedConfig"),Ki=a(` and can be used to control the model outputs. Read the
documentation from `),ms=n("a"),Ji=a("PretrainedConfig"),Gi=a(" for more information."),Xi=p(),w(Kt.$$.fragment),lr=p(),It=n("h2"),Jt=n("a"),Js=n("span"),w(Jo.$$.fragment),Qi=p(),Gs=n("span"),Yi=a("ViTFeatureExtractor"),dr=p(),it=n("div"),w(Go.$$.fragment),Zi=p(),Xs=n("p"),el=a("Constructs a ViT image processor."),tl=p(),Gt=n("div"),w(Xo.$$.fragment),ol=p(),Qs=n("p"),al=a("Preprocess an image or a batch of images."),cr=p(),Mt=n("h2"),Xt=n("a"),Ys=n("span"),w(Qo.$$.fragment),sl=p(),Zs=n("span"),nl=a("ViTImageProcessor"),pr=p(),lt=n("div"),w(Yo.$$.fragment),rl=p(),en=n("p"),il=a("Constructs a ViT image processor."),ll=p(),Qt=n("div"),w(Zo.$$.fragment),dl=p(),tn=n("p"),cl=a("Preprocess an image or batch of images."),mr=p(),jt=n("h2"),Yt=n("a"),on=n("span"),w(ea.$$.fragment),pl=p(),an=n("span"),ml=a("ViTModel"),hr=p(),dt=n("div"),w(ta.$$.fragment),hl=p(),oa=n("p"),fl=a(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),aa=n("a"),ul=a("torch.nn.Module"),gl=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_l=p(),Ae=n("div"),w(sa.$$.fragment),vl=p(),Pt=n("p"),Tl=a("The "),hs=n("a"),bl=a("ViTModel"),wl=a(" forward method, overrides the "),sn=n("code"),yl=a("__call__"),$l=a(" special method."),xl=p(),w(Zt.$$.fragment),El=p(),w(eo.$$.fragment),fr=p(),Ct=n("h2"),to=n("a"),nn=n("span"),w(na.$$.fragment),Vl=p(),rn=n("span"),kl=a("ViTForMaskedImageModeling"),ur=p(),ge=n("div"),w(ra.$$.fragment),Fl=p(),ia=n("p"),Il=a("ViT Model with a decoder on top for masked image modeling, as proposed in "),la=n("a"),Ml=a("SimMIM"),jl=a("."),Pl=p(),w(oo.$$.fragment),Cl=p(),da=n("p"),zl=a("This model is a PyTorch "),ca=n("a"),Al=a("torch.nn.Module"),ql=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nl=p(),qe=n("div"),w(pa.$$.fragment),Dl=p(),zt=n("p"),Ll=a("The "),fs=n("a"),Ol=a("ViTForMaskedImageModeling"),Sl=a(" forward method, overrides the "),ln=n("code"),Rl=a("__call__"),Wl=a(" special method."),Ul=p(),w(ao.$$.fragment),Bl=p(),w(so.$$.fragment),gr=p(),At=n("h2"),no=n("a"),dn=n("span"),w(ma.$$.fragment),Hl=p(),cn=n("span"),Kl=a("ViTForImageClassification"),_r=p(),_e=n("div"),w(ha.$$.fragment),Jl=p(),pn=n("p"),Gl=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Xl=p(),w(ro.$$.fragment),Ql=p(),fa=n("p"),Yl=a("This model is a PyTorch "),ua=n("a"),Zl=a("torch.nn.Module"),ed=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),td=p(),Ne=n("div"),w(ga.$$.fragment),od=p(),qt=n("p"),ad=a("The "),us=n("a"),sd=a("ViTForImageClassification"),nd=a(" forward method, overrides the "),mn=n("code"),rd=a("__call__"),id=a(" special method."),ld=p(),w(io.$$.fragment),dd=p(),w(lo.$$.fragment),vr=p(),Nt=n("h2"),co=n("a"),hn=n("span"),w(_a.$$.fragment),cd=p(),fn=n("span"),pd=a("TFViTModel"),Tr=p(),oe=n("div"),w(va.$$.fragment),md=p(),un=n("p"),hd=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),fd=p(),Ta=n("p"),ud=a("This model inherits from "),gs=n("a"),gd=a("TFPreTrainedModel"),_d=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd=p(),ba=n("p"),Td=a("This model is also a "),wa=n("a"),bd=a("tf.keras.Model"),wd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yd=p(),w(po.$$.fragment),$d=p(),De=n("div"),w(ya.$$.fragment),xd=p(),Dt=n("p"),Ed=a("The "),_s=n("a"),Vd=a("TFViTModel"),kd=a(" forward method, overrides the "),gn=n("code"),Fd=a("__call__"),Id=a(" special method."),Md=p(),w(mo.$$.fragment),jd=p(),w(ho.$$.fragment),br=p(),Lt=n("h2"),fo=n("a"),_n=n("span"),w($a.$$.fragment),Pd=p(),vn=n("span"),Cd=a("TFViTForImageClassification"),wr=p(),K=n("div"),w(xa.$$.fragment),zd=p(),Tn=n("p"),Ad=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),qd=p(),w(uo.$$.fragment),Nd=p(),Ea=n("p"),Dd=a("This model inherits from "),vs=n("a"),Ld=a("TFPreTrainedModel"),Od=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd=p(),Va=n("p"),Rd=a("This model is also a "),ka=n("a"),Wd=a("tf.keras.Model"),Ud=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bd=p(),w(go.$$.fragment),Hd=p(),Le=n("div"),w(Fa.$$.fragment),Kd=p(),Ot=n("p"),Jd=a("The "),Ts=n("a"),Gd=a("TFViTForImageClassification"),Xd=a(" forward method, overrides the "),bn=n("code"),Qd=a("__call__"),Yd=a(" special method."),Zd=p(),w(_o.$$.fragment),ec=p(),w(vo.$$.fragment),yr=p(),St=n("h2"),To=n("a"),wn=n("span"),w(Ia.$$.fragment),tc=p(),yn=n("span"),oc=a("FlaxVitModel"),$r=p(),J=n("div"),w(Ma.$$.fragment),ac=p(),$n=n("p"),sc=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),nc=p(),ja=n("p"),rc=a("This model inherits from "),bs=n("a"),ic=a("FlaxPreTrainedModel"),lc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dc=p(),Pa=n("p"),cc=a("This model is also a Flax Linen "),Ca=n("a"),pc=a("flax.linen.Module"),mc=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hc=p(),xn=n("p"),fc=a("Finally, this model supports inherent JAX features such as:"),uc=p(),ct=n("ul"),En=n("li"),za=n("a"),gc=a("Just-In-Time (JIT) compilation"),_c=p(),Vn=n("li"),Aa=n("a"),vc=a("Automatic Differentiation"),Tc=p(),kn=n("li"),qa=n("a"),bc=a("Vectorization"),wc=p(),Fn=n("li"),Na=n("a"),yc=a("Parallelization"),$c=p(),Oe=n("div"),w(Da.$$.fragment),xc=p(),Rt=n("p"),Ec=a("The "),In=n("code"),Vc=a("FlaxViTPreTrainedModel"),kc=a(" forward method, overrides the "),Mn=n("code"),Fc=a("__call__"),Ic=a(" special method."),Mc=p(),w(bo.$$.fragment),jc=p(),w(wo.$$.fragment),xr=p(),Wt=n("h2"),yo=n("a"),jn=n("span"),w(La.$$.fragment),Pc=p(),Pn=n("span"),Cc=a("FlaxViTForImageClassification"),Er=p(),G=n("div"),w(Oa.$$.fragment),zc=p(),Cn=n("p"),Ac=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),qc=p(),Sa=n("p"),Nc=a("This model inherits from "),ws=n("a"),Dc=a("FlaxPreTrainedModel"),Lc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Oc=p(),Ra=n("p"),Sc=a("This model is also a Flax Linen "),Wa=n("a"),Rc=a("flax.linen.Module"),Wc=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Uc=p(),zn=n("p"),Bc=a("Finally, this model supports inherent JAX features such as:"),Hc=p(),pt=n("ul"),An=n("li"),Ua=n("a"),Kc=a("Just-In-Time (JIT) compilation"),Jc=p(),qn=n("li"),Ba=n("a"),Gc=a("Automatic Differentiation"),Xc=p(),Nn=n("li"),Ha=n("a"),Qc=a("Vectorization"),Yc=p(),Dn=n("li"),Ka=n("a"),Zc=a("Parallelization"),ep=p(),Se=n("div"),w(Ja.$$.fragment),tp=p(),Ut=n("p"),op=a("The "),Ln=n("code"),ap=a("FlaxViTPreTrainedModel"),sp=a(" forward method, overrides the "),On=n("code"),np=a("__call__"),rp=a(" special method."),ip=p(),w($o.$$.fragment),lp=p(),w(xo.$$.fragment),this.h()},l(o){const g=yh('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),T=m(o),f=r(o,"H1",{class:!0});var Ga=i(f);u=r(Ga,"A",{id:!0,class:!0,href:!0});var Sn=i(u);v=r(Sn,"SPAN",{});var Rn=i(v);y(l.$$.fragment,Rn),Rn.forEach(t),Sn.forEach(t),h=m(Ga),k=r(Ga,"SPAN",{});var Wn=i(k);q=s(Wn,"Vision Transformer (ViT)"),Wn.forEach(t),Ga.forEach(t),P=m(o),A=r(o,"H2",{class:!0});var Xa=i(A);D=r(Xa,"A",{id:!0,class:!0,href:!0});var Un=i(D);ne=r(Un,"SPAN",{});var Bn=i(ne);y(I.$$.fragment,Bn),Bn.forEach(t),Un.forEach(t),Be=m(Xa),Z=r(Xa,"SPAN",{});var Hn=i(Z);He=s(Hn,"Overview"),Hn.forEach(t),Xa.forEach(t),Me=m(o),U=r(o,"P",{});var Qa=i(U);Ke=s(Qa,"The Vision Transformer (ViT) model was proposed in "),re=r(Qa,"A",{href:!0,rel:!0});var Kn=i(re);ie=s(Kn,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Kn.forEach(t),Je=s(Qa,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Qa.forEach(t),je=m(o),Q=r(o,"P",{});var Jn=i(Q);Ge=s(Jn,"The abstract from the paper is the following:"),Jn.forEach(t),Pe=m(o),Y=r(o,"P",{});var Gn=i(Y);Ee=r(Gn,"EM",{});var Xn=i(Ee);Xe=s(Xn,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Xn.forEach(t),Gn.forEach(t),ve=m(o),z=r(o,"P",{});var Qn=i(z);L=s(Qn,"Tips:"),Qn.forEach(t),Ce=m(o),C=r(o,"UL",{});var ae=i(C);le=r(ae,"LI",{});var Ya=i(le);Qe=s(Ya,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),H=r(Ya,"A",{href:!0,rel:!0});var Yn=i(H);Ye=s(Yn,"here"),Yn.forEach(t),Ze=s(Ya,"."),Ya.forEach(t),O=m(ae),Ve=r(ae,"LI",{});var Zn=i(Ve);de=s(Zn,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),Zn.forEach(t),et=m(ae),ce=r(ae,"LI",{});var Za=i(ce);pe=s(Za,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Te=r(Za,"A",{href:!0});var er=i(Te);tt=s(er,"ViTFeatureExtractor"),er.forEach(t),ee=s(Za," to resize (or rescale) and normalize images for the model."),Za.forEach(t),ot=m(ae),S=r(ae,"LI",{});var ys=i(S);at=s(ys,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),me=r(ys,"CODE",{});var hp=i(me);R=s(hp,"google/vit-base-patch16-224"),hp.forEach(t),st=s(ys,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),N=r(ys,"A",{href:!0,rel:!0});var fp=i(N);nt=s(fp,"hub"),fp.forEach(t),rt=s(ys,"."),ys.forEach(t),b=m(ae),M=r(ae,"LI",{});var $s=i(M);ut=s($s,"The available checkpoints are either (1) pre-trained on "),te=r($s,"A",{href:!0,rel:!0});var up=i(te);gt=s(up,"ImageNet-21k"),up.forEach(t),_t=s($s,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),j=r($s,"A",{href:!0,rel:!0});var gp=i(j);vt=s(gp,"ImageNet"),gp.forEach(t),Tt=s($s,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),$s.forEach(t),bt=m(ae),he=r(ae,"LI",{});var xs=i(he);wt=s(xs,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),W=r(xs,"A",{href:!0,rel:!0});var _p=i(W);fe=s(_p,"(Touvron et al., 2019)"),_p.forEach(t),yt=s(xs,", "),ke=r(xs,"A",{href:!0,rel:!0});var vp=i(ke);ue=s(vp,`(Kolesnikov
et al., 2020)`),vp.forEach(t),$t=s(xs,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),xs.forEach(t),xt=m(ae),Fe=r(ae,"LI",{});var Tp=i(Fe);Et=s(Tp,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Tp.forEach(t),ae.forEach(t),be=m(o),we=r(o,"IMG",{src:!0,alt:!0,width:!0}),tr=m(o),Lo=r(o,"SMALL",{});var dp=i(Lo);Zr=s(dp,"ViT architecture. Taken from the "),es=r(dp,"A",{href:!0});var bp=i(es);ei=s(bp,"original paper."),bp.forEach(t),dp.forEach(t),or=m(o),ts=r(o,"P",{});var wp=i(ts);ti=s(wp,"Following the original Vision Transformer, some follow-up works have been made:"),wp.forEach(t),ar=m(o),ze=r(o,"UL",{});var Eo=i(ze);Ds=r(Eo,"LI",{});var yp=i(Ds);B=r(yp,"P",{});var se=i(B);os=r(se,"A",{href:!0});var $p=i(os);oi=s($p,"DeiT"),$p.forEach(t),ai=s(se,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),as=r(se,"A",{href:!0});var xp=i(as);si=s(xp,"ViTModel"),xp.forEach(t),ni=s(se,` or
`),ss=r(se,"A",{href:!0});var Ep=i(ss);ri=s(Ep,"ViTForImageClassification"),Ep.forEach(t),ii=s(se,". There are 4 variants available (in 3 different sizes): "),Ls=r(se,"EM",{});var Vp=i(Ls);li=s(Vp,"facebook/deit-tiny-patch16-224"),Vp.forEach(t),di=s(se,`,
`),Os=r(se,"EM",{});var kp=i(Os);ci=s(kp,"facebook/deit-small-patch16-224"),kp.forEach(t),pi=s(se,", "),Ss=r(se,"EM",{});var Fp=i(Ss);mi=s(Fp,"facebook/deit-base-patch16-224"),Fp.forEach(t),hi=s(se," and "),Rs=r(se,"EM",{});var Ip=i(Rs);fi=s(Ip,"facebook/deit-base-patch16-384"),Ip.forEach(t),ui=s(se,`. Note that one should
use `),ns=r(se,"A",{href:!0});var Mp=i(ns);gi=s(Mp,"DeiTFeatureExtractor"),Mp.forEach(t),_i=s(se," in order to prepare images for the model."),se.forEach(t),yp.forEach(t),vi=m(Eo),Ws=r(Eo,"LI",{});var jp=i(Ws);rs=r(jp,"P",{});var cp=i(rs);is=r(cp,"A",{href:!0});var Pp=i(is);Ti=s(Pp,"BEiT"),Pp.forEach(t),bi=s(cp,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),cp.forEach(t),jp.forEach(t),wi=m(Eo),Us=r(Eo,"LI",{});var Cp=i(Us);Oo=r(Cp,"P",{});var kr=i(Oo);yi=s(kr,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),So=r(kr,"A",{href:!0,rel:!0});var zp=i(So);$i=s(zp,"hub"),zp.forEach(t),xi=s(kr,"."),kr.forEach(t),Cp.forEach(t),Ei=m(Eo),Bs=r(Eo,"LI",{});var Ap=i(Bs);ls=r(Ap,"P",{});var pp=i(ls);ds=r(pp,"A",{href:!0});var qp=i(ds);Vi=s(qp,"MAE"),qp.forEach(t),ki=s(pp,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),pp.forEach(t),Ap.forEach(t),Eo.forEach(t),sr=m(o),mt=r(o,"P",{});var Es=i(mt);Fi=s(Es,"This model was contributed by "),Ro=r(Es,"A",{href:!0,rel:!0});var Np=i(Ro);Ii=s(Np,"nielsr"),Np.forEach(t),Mi=s(Es,`. The original code (written in JAX) can be
found `),Wo=r(Es,"A",{href:!0,rel:!0});var Dp=i(Wo);ji=s(Dp,"here"),Dp.forEach(t),Pi=s(Es,"."),Es.forEach(t),nr=m(o),Bt=r(o,"P",{});var Fr=i(Bt);Ci=s(Fr,"Note that we converted the weights from Ross Wightman\u2019s "),Uo=r(Fr,"A",{href:!0,rel:!0});var Lp=i(Uo);zi=s(Lp,"timm library"),Lp.forEach(t),Ai=s(Fr,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Fr.forEach(t),rr=m(o),Vt=r(o,"H2",{class:!0});var Ir=i(Vt);Ht=r(Ir,"A",{id:!0,class:!0,href:!0});var Op=i(Ht);Hs=r(Op,"SPAN",{});var Sp=i(Hs);y(Bo.$$.fragment,Sp),Sp.forEach(t),Op.forEach(t),qi=m(Ir),Ks=r(Ir,"SPAN",{});var Rp=i(Ks);Ni=s(Rp,"ViTConfig"),Rp.forEach(t),Ir.forEach(t),ir=m(o),Ie=r(o,"DIV",{class:!0});var Vo=i(Ie);y(Ho.$$.fragment,Vo),Di=m(Vo),kt=r(Vo,"P",{});var Vs=i(kt);Li=s(Vs,"This is the configuration class to store the configuration of a "),cs=r(Vs,"A",{href:!0});var Wp=i(cs);Oi=s(Wp,"ViTModel"),Wp.forEach(t),Si=s(Vs,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Ko=r(Vs,"A",{href:!0,rel:!0});var Up=i(Ko);Ri=s(Up,"google/vit-base-patch16-224"),Up.forEach(t),Wi=s(Vs," architecture."),Vs.forEach(t),Ui=m(Vo),Ft=r(Vo,"P",{});var ks=i(Ft);Bi=s(ks,"Configuration objects inherit from "),ps=r(ks,"A",{href:!0});var Bp=i(ps);Hi=s(Bp,"PretrainedConfig"),Bp.forEach(t),Ki=s(ks,` and can be used to control the model outputs. Read the
documentation from `),ms=r(ks,"A",{href:!0});var Hp=i(ms);Ji=s(Hp,"PretrainedConfig"),Hp.forEach(t),Gi=s(ks," for more information."),ks.forEach(t),Xi=m(Vo),y(Kt.$$.fragment,Vo),Vo.forEach(t),lr=m(o),It=r(o,"H2",{class:!0});var Mr=i(It);Jt=r(Mr,"A",{id:!0,class:!0,href:!0});var Kp=i(Jt);Js=r(Kp,"SPAN",{});var Jp=i(Js);y(Jo.$$.fragment,Jp),Jp.forEach(t),Kp.forEach(t),Qi=m(Mr),Gs=r(Mr,"SPAN",{});var Gp=i(Gs);Yi=s(Gp,"ViTFeatureExtractor"),Gp.forEach(t),Mr.forEach(t),dr=m(o),it=r(o,"DIV",{class:!0});var Fs=i(it);y(Go.$$.fragment,Fs),Zi=m(Fs),Xs=r(Fs,"P",{});var Xp=i(Xs);el=s(Xp,"Constructs a ViT image processor."),Xp.forEach(t),tl=m(Fs),Gt=r(Fs,"DIV",{class:!0});var jr=i(Gt);y(Xo.$$.fragment,jr),ol=m(jr),Qs=r(jr,"P",{});var Qp=i(Qs);al=s(Qp,"Preprocess an image or a batch of images."),Qp.forEach(t),jr.forEach(t),Fs.forEach(t),cr=m(o),Mt=r(o,"H2",{class:!0});var Pr=i(Mt);Xt=r(Pr,"A",{id:!0,class:!0,href:!0});var Yp=i(Xt);Ys=r(Yp,"SPAN",{});var Zp=i(Ys);y(Qo.$$.fragment,Zp),Zp.forEach(t),Yp.forEach(t),sl=m(Pr),Zs=r(Pr,"SPAN",{});var em=i(Zs);nl=s(em,"ViTImageProcessor"),em.forEach(t),Pr.forEach(t),pr=m(o),lt=r(o,"DIV",{class:!0});var Is=i(lt);y(Yo.$$.fragment,Is),rl=m(Is),en=r(Is,"P",{});var tm=i(en);il=s(tm,"Constructs a ViT image processor."),tm.forEach(t),ll=m(Is),Qt=r(Is,"DIV",{class:!0});var Cr=i(Qt);y(Zo.$$.fragment,Cr),dl=m(Cr),tn=r(Cr,"P",{});var om=i(tn);cl=s(om,"Preprocess an image or batch of images."),om.forEach(t),Cr.forEach(t),Is.forEach(t),mr=m(o),jt=r(o,"H2",{class:!0});var zr=i(jt);Yt=r(zr,"A",{id:!0,class:!0,href:!0});var am=i(Yt);on=r(am,"SPAN",{});var sm=i(on);y(ea.$$.fragment,sm),sm.forEach(t),am.forEach(t),pl=m(zr),an=r(zr,"SPAN",{});var nm=i(an);ml=s(nm,"ViTModel"),nm.forEach(t),zr.forEach(t),hr=m(o),dt=r(o,"DIV",{class:!0});var Ms=i(dt);y(ta.$$.fragment,Ms),hl=m(Ms),oa=r(Ms,"P",{});var Ar=i(oa);fl=s(Ar,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),aa=r(Ar,"A",{href:!0,rel:!0});var rm=i(aa);ul=s(rm,"torch.nn.Module"),rm.forEach(t),gl=s(Ar,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ar.forEach(t),_l=m(Ms),Ae=r(Ms,"DIV",{class:!0});var ko=i(Ae);y(sa.$$.fragment,ko),vl=m(ko),Pt=r(ko,"P",{});var js=i(Pt);Tl=s(js,"The "),hs=r(js,"A",{href:!0});var im=i(hs);bl=s(im,"ViTModel"),im.forEach(t),wl=s(js," forward method, overrides the "),sn=r(js,"CODE",{});var lm=i(sn);yl=s(lm,"__call__"),lm.forEach(t),$l=s(js," special method."),js.forEach(t),xl=m(ko),y(Zt.$$.fragment,ko),El=m(ko),y(eo.$$.fragment,ko),ko.forEach(t),Ms.forEach(t),fr=m(o),Ct=r(o,"H2",{class:!0});var qr=i(Ct);to=r(qr,"A",{id:!0,class:!0,href:!0});var dm=i(to);nn=r(dm,"SPAN",{});var cm=i(nn);y(na.$$.fragment,cm),cm.forEach(t),dm.forEach(t),Vl=m(qr),rn=r(qr,"SPAN",{});var pm=i(rn);kl=s(pm,"ViTForMaskedImageModeling"),pm.forEach(t),qr.forEach(t),ur=m(o),ge=r(o,"DIV",{class:!0});var ht=i(ge);y(ra.$$.fragment,ht),Fl=m(ht),ia=r(ht,"P",{});var Nr=i(ia);Il=s(Nr,"ViT Model with a decoder on top for masked image modeling, as proposed in "),la=r(Nr,"A",{href:!0,rel:!0});var mm=i(la);Ml=s(mm,"SimMIM"),mm.forEach(t),jl=s(Nr,"."),Nr.forEach(t),Pl=m(ht),y(oo.$$.fragment,ht),Cl=m(ht),da=r(ht,"P",{});var Dr=i(da);zl=s(Dr,"This model is a PyTorch "),ca=r(Dr,"A",{href:!0,rel:!0});var hm=i(ca);Al=s(hm,"torch.nn.Module"),hm.forEach(t),ql=s(Dr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dr.forEach(t),Nl=m(ht),qe=r(ht,"DIV",{class:!0});var Fo=i(qe);y(pa.$$.fragment,Fo),Dl=m(Fo),zt=r(Fo,"P",{});var Ps=i(zt);Ll=s(Ps,"The "),fs=r(Ps,"A",{href:!0});var fm=i(fs);Ol=s(fm,"ViTForMaskedImageModeling"),fm.forEach(t),Sl=s(Ps," forward method, overrides the "),ln=r(Ps,"CODE",{});var um=i(ln);Rl=s(um,"__call__"),um.forEach(t),Wl=s(Ps," special method."),Ps.forEach(t),Ul=m(Fo),y(ao.$$.fragment,Fo),Bl=m(Fo),y(so.$$.fragment,Fo),Fo.forEach(t),ht.forEach(t),gr=m(o),At=r(o,"H2",{class:!0});var Lr=i(At);no=r(Lr,"A",{id:!0,class:!0,href:!0});var gm=i(no);dn=r(gm,"SPAN",{});var _m=i(dn);y(ma.$$.fragment,_m),_m.forEach(t),gm.forEach(t),Hl=m(Lr),cn=r(Lr,"SPAN",{});var vm=i(cn);Kl=s(vm,"ViTForImageClassification"),vm.forEach(t),Lr.forEach(t),_r=m(o),_e=r(o,"DIV",{class:!0});var ft=i(_e);y(ha.$$.fragment,ft),Jl=m(ft),pn=r(ft,"P",{});var Tm=i(pn);Gl=s(Tm,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Tm.forEach(t),Xl=m(ft),y(ro.$$.fragment,ft),Ql=m(ft),fa=r(ft,"P",{});var Or=i(fa);Yl=s(Or,"This model is a PyTorch "),ua=r(Or,"A",{href:!0,rel:!0});var bm=i(ua);Zl=s(bm,"torch.nn.Module"),bm.forEach(t),ed=s(Or,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Or.forEach(t),td=m(ft),Ne=r(ft,"DIV",{class:!0});var Io=i(Ne);y(ga.$$.fragment,Io),od=m(Io),qt=r(Io,"P",{});var Cs=i(qt);ad=s(Cs,"The "),us=r(Cs,"A",{href:!0});var wm=i(us);sd=s(wm,"ViTForImageClassification"),wm.forEach(t),nd=s(Cs," forward method, overrides the "),mn=r(Cs,"CODE",{});var ym=i(mn);rd=s(ym,"__call__"),ym.forEach(t),id=s(Cs," special method."),Cs.forEach(t),ld=m(Io),y(io.$$.fragment,Io),dd=m(Io),y(lo.$$.fragment,Io),Io.forEach(t),ft.forEach(t),vr=m(o),Nt=r(o,"H2",{class:!0});var Sr=i(Nt);co=r(Sr,"A",{id:!0,class:!0,href:!0});var $m=i(co);hn=r($m,"SPAN",{});var xm=i(hn);y(_a.$$.fragment,xm),xm.forEach(t),$m.forEach(t),cd=m(Sr),fn=r(Sr,"SPAN",{});var Em=i(fn);pd=s(Em,"TFViTModel"),Em.forEach(t),Sr.forEach(t),Tr=m(o),oe=r(o,"DIV",{class:!0});var Re=i(oe);y(va.$$.fragment,Re),md=m(Re),un=r(Re,"P",{});var Vm=i(un);hd=s(Vm,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Vm.forEach(t),fd=m(Re),Ta=r(Re,"P",{});var Rr=i(Ta);ud=s(Rr,"This model inherits from "),gs=r(Rr,"A",{href:!0});var km=i(gs);gd=s(km,"TFPreTrainedModel"),km.forEach(t),_d=s(Rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr.forEach(t),vd=m(Re),ba=r(Re,"P",{});var Wr=i(ba);Td=s(Wr,"This model is also a "),wa=r(Wr,"A",{href:!0,rel:!0});var Fm=i(wa);bd=s(Fm,"tf.keras.Model"),Fm.forEach(t),wd=s(Wr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wr.forEach(t),yd=m(Re),y(po.$$.fragment,Re),$d=m(Re),De=r(Re,"DIV",{class:!0});var Mo=i(De);y(ya.$$.fragment,Mo),xd=m(Mo),Dt=r(Mo,"P",{});var zs=i(Dt);Ed=s(zs,"The "),_s=r(zs,"A",{href:!0});var Im=i(_s);Vd=s(Im,"TFViTModel"),Im.forEach(t),kd=s(zs," forward method, overrides the "),gn=r(zs,"CODE",{});var Mm=i(gn);Fd=s(Mm,"__call__"),Mm.forEach(t),Id=s(zs," special method."),zs.forEach(t),Md=m(Mo),y(mo.$$.fragment,Mo),jd=m(Mo),y(ho.$$.fragment,Mo),Mo.forEach(t),Re.forEach(t),br=m(o),Lt=r(o,"H2",{class:!0});var Ur=i(Lt);fo=r(Ur,"A",{id:!0,class:!0,href:!0});var jm=i(fo);_n=r(jm,"SPAN",{});var Pm=i(_n);y($a.$$.fragment,Pm),Pm.forEach(t),jm.forEach(t),Pd=m(Ur),vn=r(Ur,"SPAN",{});var Cm=i(vn);Cd=s(Cm,"TFViTForImageClassification"),Cm.forEach(t),Ur.forEach(t),wr=m(o),K=r(o,"DIV",{class:!0});var ye=i(K);y(xa.$$.fragment,ye),zd=m(ye),Tn=r(ye,"P",{});var zm=i(Tn);Ad=s(zm,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),zm.forEach(t),qd=m(ye),y(uo.$$.fragment,ye),Nd=m(ye),Ea=r(ye,"P",{});var Br=i(Ea);Dd=s(Br,"This model inherits from "),vs=r(Br,"A",{href:!0});var Am=i(vs);Ld=s(Am,"TFPreTrainedModel"),Am.forEach(t),Od=s(Br,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Br.forEach(t),Sd=m(ye),Va=r(ye,"P",{});var Hr=i(Va);Rd=s(Hr,"This model is also a "),ka=r(Hr,"A",{href:!0,rel:!0});var qm=i(ka);Wd=s(qm,"tf.keras.Model"),qm.forEach(t),Ud=s(Hr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hr.forEach(t),Bd=m(ye),y(go.$$.fragment,ye),Hd=m(ye),Le=r(ye,"DIV",{class:!0});var jo=i(Le);y(Fa.$$.fragment,jo),Kd=m(jo),Ot=r(jo,"P",{});var As=i(Ot);Jd=s(As,"The "),Ts=r(As,"A",{href:!0});var Nm=i(Ts);Gd=s(Nm,"TFViTForImageClassification"),Nm.forEach(t),Xd=s(As," forward method, overrides the "),bn=r(As,"CODE",{});var Dm=i(bn);Qd=s(Dm,"__call__"),Dm.forEach(t),Yd=s(As," special method."),As.forEach(t),Zd=m(jo),y(_o.$$.fragment,jo),ec=m(jo),y(vo.$$.fragment,jo),jo.forEach(t),ye.forEach(t),yr=m(o),St=r(o,"H2",{class:!0});var Kr=i(St);To=r(Kr,"A",{id:!0,class:!0,href:!0});var Lm=i(To);wn=r(Lm,"SPAN",{});var Om=i(wn);y(Ia.$$.fragment,Om),Om.forEach(t),Lm.forEach(t),tc=m(Kr),yn=r(Kr,"SPAN",{});var Sm=i(yn);oc=s(Sm,"FlaxVitModel"),Sm.forEach(t),Kr.forEach(t),$r=m(o),J=r(o,"DIV",{class:!0});var $e=i(J);y(Ma.$$.fragment,$e),ac=m($e),$n=r($e,"P",{});var Rm=i($n);sc=s(Rm,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Rm.forEach(t),nc=m($e),ja=r($e,"P",{});var Jr=i(ja);rc=s(Jr,"This model inherits from "),bs=r(Jr,"A",{href:!0});var Wm=i(bs);ic=s(Wm,"FlaxPreTrainedModel"),Wm.forEach(t),lc=s(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jr.forEach(t),dc=m($e),Pa=r($e,"P",{});var Gr=i(Pa);cc=s(Gr,"This model is also a Flax Linen "),Ca=r(Gr,"A",{href:!0,rel:!0});var Um=i(Ca);pc=s(Um,"flax.linen.Module"),Um.forEach(t),mc=s(Gr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gr.forEach(t),hc=m($e),xn=r($e,"P",{});var Bm=i(xn);fc=s(Bm,"Finally, this model supports inherent JAX features such as:"),Bm.forEach(t),uc=m($e),ct=r($e,"UL",{});var Po=i(ct);En=r(Po,"LI",{});var Hm=i(En);za=r(Hm,"A",{href:!0,rel:!0});var Km=i(za);gc=s(Km,"Just-In-Time (JIT) compilation"),Km.forEach(t),Hm.forEach(t),_c=m(Po),Vn=r(Po,"LI",{});var Jm=i(Vn);Aa=r(Jm,"A",{href:!0,rel:!0});var Gm=i(Aa);vc=s(Gm,"Automatic Differentiation"),Gm.forEach(t),Jm.forEach(t),Tc=m(Po),kn=r(Po,"LI",{});var Xm=i(kn);qa=r(Xm,"A",{href:!0,rel:!0});var Qm=i(qa);bc=s(Qm,"Vectorization"),Qm.forEach(t),Xm.forEach(t),wc=m(Po),Fn=r(Po,"LI",{});var Ym=i(Fn);Na=r(Ym,"A",{href:!0,rel:!0});var Zm=i(Na);yc=s(Zm,"Parallelization"),Zm.forEach(t),Ym.forEach(t),Po.forEach(t),$c=m($e),Oe=r($e,"DIV",{class:!0});var Co=i(Oe);y(Da.$$.fragment,Co),xc=m(Co),Rt=r(Co,"P",{});var qs=i(Rt);Ec=s(qs,"The "),In=r(qs,"CODE",{});var eh=i(In);Vc=s(eh,"FlaxViTPreTrainedModel"),eh.forEach(t),kc=s(qs," forward method, overrides the "),Mn=r(qs,"CODE",{});var th=i(Mn);Fc=s(th,"__call__"),th.forEach(t),Ic=s(qs," special method."),qs.forEach(t),Mc=m(Co),y(bo.$$.fragment,Co),jc=m(Co),y(wo.$$.fragment,Co),Co.forEach(t),$e.forEach(t),xr=m(o),Wt=r(o,"H2",{class:!0});var Xr=i(Wt);yo=r(Xr,"A",{id:!0,class:!0,href:!0});var oh=i(yo);jn=r(oh,"SPAN",{});var ah=i(jn);y(La.$$.fragment,ah),ah.forEach(t),oh.forEach(t),Pc=m(Xr),Pn=r(Xr,"SPAN",{});var sh=i(Pn);Cc=s(sh,"FlaxViTForImageClassification"),sh.forEach(t),Xr.forEach(t),Er=m(o),G=r(o,"DIV",{class:!0});var xe=i(G);y(Oa.$$.fragment,xe),zc=m(xe),Cn=r(xe,"P",{});var nh=i(Cn);Ac=s(nh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),nh.forEach(t),qc=m(xe),Sa=r(xe,"P",{});var Qr=i(Sa);Nc=s(Qr,"This model inherits from "),ws=r(Qr,"A",{href:!0});var rh=i(ws);Dc=s(rh,"FlaxPreTrainedModel"),rh.forEach(t),Lc=s(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qr.forEach(t),Oc=m(xe),Ra=r(xe,"P",{});var Yr=i(Ra);Sc=s(Yr,"This model is also a Flax Linen "),Wa=r(Yr,"A",{href:!0,rel:!0});var ih=i(Wa);Rc=s(ih,"flax.linen.Module"),ih.forEach(t),Wc=s(Yr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yr.forEach(t),Uc=m(xe),zn=r(xe,"P",{});var lh=i(zn);Bc=s(lh,"Finally, this model supports inherent JAX features such as:"),lh.forEach(t),Hc=m(xe),pt=r(xe,"UL",{});var zo=i(pt);An=r(zo,"LI",{});var dh=i(An);Ua=r(dh,"A",{href:!0,rel:!0});var ch=i(Ua);Kc=s(ch,"Just-In-Time (JIT) compilation"),ch.forEach(t),dh.forEach(t),Jc=m(zo),qn=r(zo,"LI",{});var ph=i(qn);Ba=r(ph,"A",{href:!0,rel:!0});var mh=i(Ba);Gc=s(mh,"Automatic Differentiation"),mh.forEach(t),ph.forEach(t),Xc=m(zo),Nn=r(zo,"LI",{});var hh=i(Nn);Ha=r(hh,"A",{href:!0,rel:!0});var fh=i(Ha);Qc=s(fh,"Vectorization"),fh.forEach(t),hh.forEach(t),Yc=m(zo),Dn=r(zo,"LI",{});var uh=i(Dn);Ka=r(uh,"A",{href:!0,rel:!0});var gh=i(Ka);Zc=s(gh,"Parallelization"),gh.forEach(t),uh.forEach(t),zo.forEach(t),ep=m(xe),Se=r(xe,"DIV",{class:!0});var Ao=i(Se);y(Ja.$$.fragment,Ao),tp=m(Ao),Ut=r(Ao,"P",{});var Ns=i(Ut);op=s(Ns,"The "),Ln=r(Ns,"CODE",{});var _h=i(Ln);ap=s(_h,"FlaxViTPreTrainedModel"),_h.forEach(t),sp=s(Ns," forward method, overrides the "),On=r(Ns,"CODE",{});var vh=i(On);np=s(vh,"__call__"),vh.forEach(t),rp=s(Ns," special method."),Ns.forEach(t),ip=m(Ao),y($o.$$.fragment,Ao),lp=m(Ao),y(xo.$$.fragment,Ao),Ao.forEach(t),xe.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Hh)),c(u,"id","vision-transformer-vit"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#vision-transformer-vit"),c(f,"class","relative group"),c(D,"id","overview"),c(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(D,"href","#overview"),c(A,"class","relative group"),c(re,"href","https://arxiv.org/abs/2010.11929"),c(re,"rel","nofollow"),c(H,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),c(H,"rel","nofollow"),c(Te,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTImageProcessor"),c(N,"href","https://huggingface.co/models?search=vit"),c(N,"rel","nofollow"),c(te,"href","http://www.image-net.org/"),c(te,"rel","nofollow"),c(j,"href","http://www.image-net.org/challenges/LSVRC/2012/"),c(j,"rel","nofollow"),c(W,"href","https://arxiv.org/abs/1906.06423"),c(W,"rel","nofollow"),c(ke,"href","https://arxiv.org/abs/1912.11370"),c(ke,"rel","nofollow"),$h(we.src,mp="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/vit_architecture.jpg")||c(we,"src",mp),c(we,"alt","drawing"),c(we,"width","600"),c(es,"href","https://arxiv.org/abs/2010.11929"),c(os,"href","deit"),c(as,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(ss,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(ns,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTImageProcessor"),c(is,"href","beit"),c(So,"href","https://huggingface.co/models?other=dino"),c(So,"rel","nofollow"),c(ds,"href","vit_mae"),c(Ro,"href","https://huggingface.co/nielsr"),c(Ro,"rel","nofollow"),c(Wo,"href","https://github.com/google-research/vision_transformer"),c(Wo,"rel","nofollow"),c(Uo,"href","https://github.com/rwightman/pytorch-image-models"),c(Uo,"rel","nofollow"),c(Ht,"id","transformers.ViTConfig"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.ViTConfig"),c(Vt,"class","relative group"),c(cs,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Ko,"href","https://huggingface.co/google/vit-base-patch16-224"),c(Ko,"rel","nofollow"),c(ps,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ms,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jt,"id","transformers.ViTImageProcessor"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.ViTImageProcessor"),c(It,"class","relative group"),c(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.ViTImageProcessor"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.ViTImageProcessor"),c(Mt,"class","relative group"),c(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Yt,"id","transformers.ViTModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.ViTModel"),c(jt,"class","relative group"),c(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(aa,"rel","nofollow"),c(hs,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.ViTForMaskedImageModeling"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.ViTForMaskedImageModeling"),c(Ct,"class","relative group"),c(la,"href","https://arxiv.org/abs/2111.09886"),c(la,"rel","nofollow"),c(ca,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ca,"rel","nofollow"),c(fs,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.ViTForImageClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.ViTForImageClassification"),c(At,"class","relative group"),c(ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ua,"rel","nofollow"),c(us,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(co,"id","transformers.TFViTModel"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.TFViTModel"),c(Nt,"class","relative group"),c(gs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wa,"rel","nofollow"),c(_s,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTModel"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fo,"id","transformers.TFViTForImageClassification"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.TFViTForImageClassification"),c(Lt,"class","relative group"),c(vs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ka,"rel","nofollow"),c(Ts,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTForImageClassification"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(To,"id","transformers.FlaxViTModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.FlaxViTModel"),c(St,"class","relative group"),c(bs,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ca,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ca,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(za,"rel","nofollow"),c(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Aa,"rel","nofollow"),c(qa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(qa,"rel","nofollow"),c(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Na,"rel","nofollow"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"id","transformers.FlaxViTForImageClassification"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.FlaxViTForImageClassification"),c(Wt,"class","relative group"),c(ws,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Wa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Wa,"rel","nofollow"),c(Ua,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ua,"rel","nofollow"),c(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ba,"rel","nofollow"),c(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ha,"rel","nofollow"),c(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ka,"rel","nofollow"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,f,g),e(f,u),e(u,v),$(l,v,null),e(f,h),e(f,k),e(k,q),_(o,P,g),_(o,A,g),e(A,D),e(D,ne),$(I,ne,null),e(A,Be),e(A,Z),e(Z,He),_(o,Me,g),_(o,U,g),e(U,Ke),e(U,re),e(re,ie),e(U,Je),_(o,je,g),_(o,Q,g),e(Q,Ge),_(o,Pe,g),_(o,Y,g),e(Y,Ee),e(Ee,Xe),_(o,ve,g),_(o,z,g),e(z,L),_(o,Ce,g),_(o,C,g),e(C,le),e(le,Qe),e(le,H),e(H,Ye),e(le,Ze),e(C,O),e(C,Ve),e(Ve,de),e(C,et),e(C,ce),e(ce,pe),e(ce,Te),e(Te,tt),e(ce,ee),e(C,ot),e(C,S),e(S,at),e(S,me),e(me,R),e(S,st),e(S,N),e(N,nt),e(S,rt),e(C,b),e(C,M),e(M,ut),e(M,te),e(te,gt),e(M,_t),e(M,j),e(j,vt),e(M,Tt),e(C,bt),e(C,he),e(he,wt),e(he,W),e(W,fe),e(he,yt),e(he,ke),e(ke,ue),e(he,$t),e(C,xt),e(C,Fe),e(Fe,Et),_(o,be,g),_(o,we,g),_(o,tr,g),_(o,Lo,g),e(Lo,Zr),e(Lo,es),e(es,ei),_(o,or,g),_(o,ts,g),e(ts,ti),_(o,ar,g),_(o,ze,g),e(ze,Ds),e(Ds,B),e(B,os),e(os,oi),e(B,ai),e(B,as),e(as,si),e(B,ni),e(B,ss),e(ss,ri),e(B,ii),e(B,Ls),e(Ls,li),e(B,di),e(B,Os),e(Os,ci),e(B,pi),e(B,Ss),e(Ss,mi),e(B,hi),e(B,Rs),e(Rs,fi),e(B,ui),e(B,ns),e(ns,gi),e(B,_i),e(ze,vi),e(ze,Ws),e(Ws,rs),e(rs,is),e(is,Ti),e(rs,bi),e(ze,wi),e(ze,Us),e(Us,Oo),e(Oo,yi),e(Oo,So),e(So,$i),e(Oo,xi),e(ze,Ei),e(ze,Bs),e(Bs,ls),e(ls,ds),e(ds,Vi),e(ls,ki),_(o,sr,g),_(o,mt,g),e(mt,Fi),e(mt,Ro),e(Ro,Ii),e(mt,Mi),e(mt,Wo),e(Wo,ji),e(mt,Pi),_(o,nr,g),_(o,Bt,g),e(Bt,Ci),e(Bt,Uo),e(Uo,zi),e(Bt,Ai),_(o,rr,g),_(o,Vt,g),e(Vt,Ht),e(Ht,Hs),$(Bo,Hs,null),e(Vt,qi),e(Vt,Ks),e(Ks,Ni),_(o,ir,g),_(o,Ie,g),$(Ho,Ie,null),e(Ie,Di),e(Ie,kt),e(kt,Li),e(kt,cs),e(cs,Oi),e(kt,Si),e(kt,Ko),e(Ko,Ri),e(kt,Wi),e(Ie,Ui),e(Ie,Ft),e(Ft,Bi),e(Ft,ps),e(ps,Hi),e(Ft,Ki),e(Ft,ms),e(ms,Ji),e(Ft,Gi),e(Ie,Xi),$(Kt,Ie,null),_(o,lr,g),_(o,It,g),e(It,Jt),e(Jt,Js),$(Jo,Js,null),e(It,Qi),e(It,Gs),e(Gs,Yi),_(o,dr,g),_(o,it,g),$(Go,it,null),e(it,Zi),e(it,Xs),e(Xs,el),e(it,tl),e(it,Gt),$(Xo,Gt,null),e(Gt,ol),e(Gt,Qs),e(Qs,al),_(o,cr,g),_(o,Mt,g),e(Mt,Xt),e(Xt,Ys),$(Qo,Ys,null),e(Mt,sl),e(Mt,Zs),e(Zs,nl),_(o,pr,g),_(o,lt,g),$(Yo,lt,null),e(lt,rl),e(lt,en),e(en,il),e(lt,ll),e(lt,Qt),$(Zo,Qt,null),e(Qt,dl),e(Qt,tn),e(tn,cl),_(o,mr,g),_(o,jt,g),e(jt,Yt),e(Yt,on),$(ea,on,null),e(jt,pl),e(jt,an),e(an,ml),_(o,hr,g),_(o,dt,g),$(ta,dt,null),e(dt,hl),e(dt,oa),e(oa,fl),e(oa,aa),e(aa,ul),e(oa,gl),e(dt,_l),e(dt,Ae),$(sa,Ae,null),e(Ae,vl),e(Ae,Pt),e(Pt,Tl),e(Pt,hs),e(hs,bl),e(Pt,wl),e(Pt,sn),e(sn,yl),e(Pt,$l),e(Ae,xl),$(Zt,Ae,null),e(Ae,El),$(eo,Ae,null),_(o,fr,g),_(o,Ct,g),e(Ct,to),e(to,nn),$(na,nn,null),e(Ct,Vl),e(Ct,rn),e(rn,kl),_(o,ur,g),_(o,ge,g),$(ra,ge,null),e(ge,Fl),e(ge,ia),e(ia,Il),e(ia,la),e(la,Ml),e(ia,jl),e(ge,Pl),$(oo,ge,null),e(ge,Cl),e(ge,da),e(da,zl),e(da,ca),e(ca,Al),e(da,ql),e(ge,Nl),e(ge,qe),$(pa,qe,null),e(qe,Dl),e(qe,zt),e(zt,Ll),e(zt,fs),e(fs,Ol),e(zt,Sl),e(zt,ln),e(ln,Rl),e(zt,Wl),e(qe,Ul),$(ao,qe,null),e(qe,Bl),$(so,qe,null),_(o,gr,g),_(o,At,g),e(At,no),e(no,dn),$(ma,dn,null),e(At,Hl),e(At,cn),e(cn,Kl),_(o,_r,g),_(o,_e,g),$(ha,_e,null),e(_e,Jl),e(_e,pn),e(pn,Gl),e(_e,Xl),$(ro,_e,null),e(_e,Ql),e(_e,fa),e(fa,Yl),e(fa,ua),e(ua,Zl),e(fa,ed),e(_e,td),e(_e,Ne),$(ga,Ne,null),e(Ne,od),e(Ne,qt),e(qt,ad),e(qt,us),e(us,sd),e(qt,nd),e(qt,mn),e(mn,rd),e(qt,id),e(Ne,ld),$(io,Ne,null),e(Ne,dd),$(lo,Ne,null),_(o,vr,g),_(o,Nt,g),e(Nt,co),e(co,hn),$(_a,hn,null),e(Nt,cd),e(Nt,fn),e(fn,pd),_(o,Tr,g),_(o,oe,g),$(va,oe,null),e(oe,md),e(oe,un),e(un,hd),e(oe,fd),e(oe,Ta),e(Ta,ud),e(Ta,gs),e(gs,gd),e(Ta,_d),e(oe,vd),e(oe,ba),e(ba,Td),e(ba,wa),e(wa,bd),e(ba,wd),e(oe,yd),$(po,oe,null),e(oe,$d),e(oe,De),$(ya,De,null),e(De,xd),e(De,Dt),e(Dt,Ed),e(Dt,_s),e(_s,Vd),e(Dt,kd),e(Dt,gn),e(gn,Fd),e(Dt,Id),e(De,Md),$(mo,De,null),e(De,jd),$(ho,De,null),_(o,br,g),_(o,Lt,g),e(Lt,fo),e(fo,_n),$($a,_n,null),e(Lt,Pd),e(Lt,vn),e(vn,Cd),_(o,wr,g),_(o,K,g),$(xa,K,null),e(K,zd),e(K,Tn),e(Tn,Ad),e(K,qd),$(uo,K,null),e(K,Nd),e(K,Ea),e(Ea,Dd),e(Ea,vs),e(vs,Ld),e(Ea,Od),e(K,Sd),e(K,Va),e(Va,Rd),e(Va,ka),e(ka,Wd),e(Va,Ud),e(K,Bd),$(go,K,null),e(K,Hd),e(K,Le),$(Fa,Le,null),e(Le,Kd),e(Le,Ot),e(Ot,Jd),e(Ot,Ts),e(Ts,Gd),e(Ot,Xd),e(Ot,bn),e(bn,Qd),e(Ot,Yd),e(Le,Zd),$(_o,Le,null),e(Le,ec),$(vo,Le,null),_(o,yr,g),_(o,St,g),e(St,To),e(To,wn),$(Ia,wn,null),e(St,tc),e(St,yn),e(yn,oc),_(o,$r,g),_(o,J,g),$(Ma,J,null),e(J,ac),e(J,$n),e($n,sc),e(J,nc),e(J,ja),e(ja,rc),e(ja,bs),e(bs,ic),e(ja,lc),e(J,dc),e(J,Pa),e(Pa,cc),e(Pa,Ca),e(Ca,pc),e(Pa,mc),e(J,hc),e(J,xn),e(xn,fc),e(J,uc),e(J,ct),e(ct,En),e(En,za),e(za,gc),e(ct,_c),e(ct,Vn),e(Vn,Aa),e(Aa,vc),e(ct,Tc),e(ct,kn),e(kn,qa),e(qa,bc),e(ct,wc),e(ct,Fn),e(Fn,Na),e(Na,yc),e(J,$c),e(J,Oe),$(Da,Oe,null),e(Oe,xc),e(Oe,Rt),e(Rt,Ec),e(Rt,In),e(In,Vc),e(Rt,kc),e(Rt,Mn),e(Mn,Fc),e(Rt,Ic),e(Oe,Mc),$(bo,Oe,null),e(Oe,jc),$(wo,Oe,null),_(o,xr,g),_(o,Wt,g),e(Wt,yo),e(yo,jn),$(La,jn,null),e(Wt,Pc),e(Wt,Pn),e(Pn,Cc),_(o,Er,g),_(o,G,g),$(Oa,G,null),e(G,zc),e(G,Cn),e(Cn,Ac),e(G,qc),e(G,Sa),e(Sa,Nc),e(Sa,ws),e(ws,Dc),e(Sa,Lc),e(G,Oc),e(G,Ra),e(Ra,Sc),e(Ra,Wa),e(Wa,Rc),e(Ra,Wc),e(G,Uc),e(G,zn),e(zn,Bc),e(G,Hc),e(G,pt),e(pt,An),e(An,Ua),e(Ua,Kc),e(pt,Jc),e(pt,qn),e(qn,Ba),e(Ba,Gc),e(pt,Xc),e(pt,Nn),e(Nn,Ha),e(Ha,Qc),e(pt,Yc),e(pt,Dn),e(Dn,Ka),e(Ka,Zc),e(G,ep),e(G,Se),$(Ja,Se,null),e(Se,tp),e(Se,Ut),e(Ut,op),e(Ut,Ln),e(Ln,ap),e(Ut,sp),e(Ut,On),e(On,np),e(Ut,rp),e(Se,ip),$($o,Se,null),e(Se,lp),$(xo,Se,null),Vr=!0},p(o,[g]){const Ga={};g&2&&(Ga.$$scope={dirty:g,ctx:o}),Kt.$set(Ga);const Sn={};g&2&&(Sn.$$scope={dirty:g,ctx:o}),Zt.$set(Sn);const Rn={};g&2&&(Rn.$$scope={dirty:g,ctx:o}),eo.$set(Rn);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:o}),oo.$set(Wn);const Xa={};g&2&&(Xa.$$scope={dirty:g,ctx:o}),ao.$set(Xa);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:o}),so.$set(Un);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:o}),ro.$set(Bn);const Hn={};g&2&&(Hn.$$scope={dirty:g,ctx:o}),io.$set(Hn);const Qa={};g&2&&(Qa.$$scope={dirty:g,ctx:o}),lo.$set(Qa);const Kn={};g&2&&(Kn.$$scope={dirty:g,ctx:o}),po.$set(Kn);const Jn={};g&2&&(Jn.$$scope={dirty:g,ctx:o}),mo.$set(Jn);const Gn={};g&2&&(Gn.$$scope={dirty:g,ctx:o}),ho.$set(Gn);const Xn={};g&2&&(Xn.$$scope={dirty:g,ctx:o}),uo.$set(Xn);const Qn={};g&2&&(Qn.$$scope={dirty:g,ctx:o}),go.$set(Qn);const ae={};g&2&&(ae.$$scope={dirty:g,ctx:o}),_o.$set(ae);const Ya={};g&2&&(Ya.$$scope={dirty:g,ctx:o}),vo.$set(Ya);const Yn={};g&2&&(Yn.$$scope={dirty:g,ctx:o}),bo.$set(Yn);const Zn={};g&2&&(Zn.$$scope={dirty:g,ctx:o}),wo.$set(Zn);const Za={};g&2&&(Za.$$scope={dirty:g,ctx:o}),$o.$set(Za);const er={};g&2&&(er.$$scope={dirty:g,ctx:o}),xo.$set(er)},i(o){Vr||(x(l.$$.fragment,o),x(I.$$.fragment,o),x(Bo.$$.fragment,o),x(Ho.$$.fragment,o),x(Kt.$$.fragment,o),x(Jo.$$.fragment,o),x(Go.$$.fragment,o),x(Xo.$$.fragment,o),x(Qo.$$.fragment,o),x(Yo.$$.fragment,o),x(Zo.$$.fragment,o),x(ea.$$.fragment,o),x(ta.$$.fragment,o),x(sa.$$.fragment,o),x(Zt.$$.fragment,o),x(eo.$$.fragment,o),x(na.$$.fragment,o),x(ra.$$.fragment,o),x(oo.$$.fragment,o),x(pa.$$.fragment,o),x(ao.$$.fragment,o),x(so.$$.fragment,o),x(ma.$$.fragment,o),x(ha.$$.fragment,o),x(ro.$$.fragment,o),x(ga.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(_a.$$.fragment,o),x(va.$$.fragment,o),x(po.$$.fragment,o),x(ya.$$.fragment,o),x(mo.$$.fragment,o),x(ho.$$.fragment,o),x($a.$$.fragment,o),x(xa.$$.fragment,o),x(uo.$$.fragment,o),x(go.$$.fragment,o),x(Fa.$$.fragment,o),x(_o.$$.fragment,o),x(vo.$$.fragment,o),x(Ia.$$.fragment,o),x(Ma.$$.fragment,o),x(Da.$$.fragment,o),x(bo.$$.fragment,o),x(wo.$$.fragment,o),x(La.$$.fragment,o),x(Oa.$$.fragment,o),x(Ja.$$.fragment,o),x($o.$$.fragment,o),x(xo.$$.fragment,o),Vr=!0)},o(o){E(l.$$.fragment,o),E(I.$$.fragment,o),E(Bo.$$.fragment,o),E(Ho.$$.fragment,o),E(Kt.$$.fragment,o),E(Jo.$$.fragment,o),E(Go.$$.fragment,o),E(Xo.$$.fragment,o),E(Qo.$$.fragment,o),E(Yo.$$.fragment,o),E(Zo.$$.fragment,o),E(ea.$$.fragment,o),E(ta.$$.fragment,o),E(sa.$$.fragment,o),E(Zt.$$.fragment,o),E(eo.$$.fragment,o),E(na.$$.fragment,o),E(ra.$$.fragment,o),E(oo.$$.fragment,o),E(pa.$$.fragment,o),E(ao.$$.fragment,o),E(so.$$.fragment,o),E(ma.$$.fragment,o),E(ha.$$.fragment,o),E(ro.$$.fragment,o),E(ga.$$.fragment,o),E(io.$$.fragment,o),E(lo.$$.fragment,o),E(_a.$$.fragment,o),E(va.$$.fragment,o),E(po.$$.fragment,o),E(ya.$$.fragment,o),E(mo.$$.fragment,o),E(ho.$$.fragment,o),E($a.$$.fragment,o),E(xa.$$.fragment,o),E(uo.$$.fragment,o),E(go.$$.fragment,o),E(Fa.$$.fragment,o),E(_o.$$.fragment,o),E(vo.$$.fragment,o),E(Ia.$$.fragment,o),E(Ma.$$.fragment,o),E(Da.$$.fragment,o),E(bo.$$.fragment,o),E(wo.$$.fragment,o),E(La.$$.fragment,o),E(Oa.$$.fragment,o),E(Ja.$$.fragment,o),E($o.$$.fragment,o),E(xo.$$.fragment,o),Vr=!1},d(o){t(d),o&&t(T),o&&t(f),V(l),o&&t(P),o&&t(A),V(I),o&&t(Me),o&&t(U),o&&t(je),o&&t(Q),o&&t(Pe),o&&t(Y),o&&t(ve),o&&t(z),o&&t(Ce),o&&t(C),o&&t(be),o&&t(we),o&&t(tr),o&&t(Lo),o&&t(or),o&&t(ts),o&&t(ar),o&&t(ze),o&&t(sr),o&&t(mt),o&&t(nr),o&&t(Bt),o&&t(rr),o&&t(Vt),V(Bo),o&&t(ir),o&&t(Ie),V(Ho),V(Kt),o&&t(lr),o&&t(It),V(Jo),o&&t(dr),o&&t(it),V(Go),V(Xo),o&&t(cr),o&&t(Mt),V(Qo),o&&t(pr),o&&t(lt),V(Yo),V(Zo),o&&t(mr),o&&t(jt),V(ea),o&&t(hr),o&&t(dt),V(ta),V(sa),V(Zt),V(eo),o&&t(fr),o&&t(Ct),V(na),o&&t(ur),o&&t(ge),V(ra),V(oo),V(pa),V(ao),V(so),o&&t(gr),o&&t(At),V(ma),o&&t(_r),o&&t(_e),V(ha),V(ro),V(ga),V(io),V(lo),o&&t(vr),o&&t(Nt),V(_a),o&&t(Tr),o&&t(oe),V(va),V(po),V(ya),V(mo),V(ho),o&&t(br),o&&t(Lt),V($a),o&&t(wr),o&&t(K),V(xa),V(uo),V(go),V(Fa),V(_o),V(vo),o&&t(yr),o&&t(St),V(Ia),o&&t($r),o&&t(J),V(Ma),V(Da),V(bo),V(wo),o&&t(xr),o&&t(Wt),V(La),o&&t(Er),o&&t(G),V(Oa),V(Ja),V($o),V(xo)}}}const Hh={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTImageProcessor",title:"ViTFeatureExtractor"},{local:"transformers.ViTImageProcessor",title:"ViTImageProcessor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function Kh(F){return xh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ef extends Th{constructor(d){super();bh(this,d,Kh,Bh,wh,{})}}export{ef as default,Hh as metadata};
