import{S as Xn,i as Zn,s as Qn,e as a,k as f,w as b,t as n,M as Yn,c as s,d as o,m as u,a as r,x as w,h as i,b as c,G as e,g as _,y as $,q as y,o as D,B as k,v as ei,L as Co}from"../../chunks/vendor-hf-doc-builder.js";import{T as St}from"../../chunks/Tip-hf-doc-builder.js";import{D as H}from"../../chunks/Docstring-hf-doc-builder.js";import{C as jo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Mo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ti(x){let d,v,m,h,T;return{c(){d=a("p"),v=n(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=a("a"),h=n("Github Issue"),T=n("."),this.h()},l(l){d=s(l,"P",{});var p=r(d);v=i(p,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),m=s(p,"A",{href:!0,rel:!0});var I=r(m);h=i(I,"Github Issue"),I.forEach(o),T=i(p,"."),p.forEach(o),this.h()},h(){c(m,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(m,"rel","nofollow")},m(l,p){_(l,d,p),e(d,v),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function oi(x){let d,v,m,h,T;return h=new jo({props:{code:`from transformers import DeiTModel, DeiTConfig

# Initializing a DeiT deit-base-distilled-patch16-224 style configuration
configuration = DeiTConfig()

# Initializing a model from the deit-base-distilled-patch16-224 style configuration
model = DeiTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTModel, DeiTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DeiT deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DeiTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the deit-base-distilled-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=n("Example:"),m=f(),b(h.$$.fragment)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Example:"),p.forEach(o),m=u(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function ai(x){let d,v;return{c(){d=a("p"),v=n(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){d=s(m,"P",{});var h=r(d);v=i(h,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),h.forEach(o)},m(m,h){_(m,d,h),e(d,v)},d(m){m&&o(d)}}}function si(x){let d,v,m,h,T;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var I=r(m);h=i(I,"Module"),I.forEach(o),T=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,v),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function ri(x){let d,v,m,h,T;return h=new jo({props:{code:`from transformers import DeiTFeatureExtractor, DeiTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTModel.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTModel.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">198</span>, <span class="hljs-number">768</span>]`}}),{c(){d=a("p"),v=n("Example:"),m=f(),b(h.$$.fragment)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Example:"),p.forEach(o),m=u(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function ni(x){let d,v,m,h,T;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var I=r(m);h=i(I,"Module"),I.forEach(o),T=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,v),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function ii(x){let d,v,m,h,T;return h=new jo({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForMaskedImageModeling.from_pretrained("facebook/deit-base-distilled-patch16-224")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=a("p"),v=n("Examples:"),m=f(),b(h.$$.fragment)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Examples:"),p.forEach(o),m=u(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function li(x){let d,v,m,h,T;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var I=r(m);h=i(I,"Module"),I.forEach(o),T=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,v),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function di(x){let d,v,m,h,T;return h=new jo({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassification
import torch
from PIL import Image
import requests

torch.manual_seed(3)
url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

# note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,
# so the head will be randomly initialized, hence the predictions will be random
feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassification.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(images=image, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
# model predicts one of the 1000 ImageNet classes
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">3</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: we are loading a DeiTForImageClassificationWithTeacher from the hub here,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># so the head will be randomly initialized, hence the predictions will be random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: maillot`}}),{c(){d=a("p"),v=n("Examples:"),m=f(),b(h.$$.fragment)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Examples:"),p.forEach(o),m=u(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function ci(x){let d,v,m,h,T;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),h=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var I=r(m);h=i(I,"Module"),I.forEach(o),T=i(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,v),e(d,m),e(m,h),e(d,T)},d(l){l&&o(d)}}}function hi(x){let d,v,m,h,T;return h=new jo({props:{code:`from transformers import DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = DeiTFeatureExtractor.from_pretrained("facebook/deit-base-distilled-patch16-224")
model = DeiTForImageClassificationWithTeacher.from_pretrained("facebook/deit-base-distilled-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DeiTFeatureExtractor, DeiTForImageClassificationWithTeacher
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = DeiTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DeiTForImageClassificationWithTeacher.from_pretrained(<span class="hljs-string">&quot;facebook/deit-base-distilled-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`}}),{c(){d=a("p"),v=n("Example:"),m=f(),b(h.$$.fragment)},l(l){d=s(l,"P",{});var p=r(d);v=i(p,"Example:"),p.forEach(o),m=u(l),w(h.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,m,p),$(h,l,p),T=!0},p:Co,i(l){T||(y(h.$$.fragment,l),T=!0)},o(l){D(h.$$.fragment,l),T=!1},d(l){l&&o(d),l&&o(m),k(h,l)}}}function pi(x){let d,v,m,h,T,l,p,I,ha,Po,le,zo,J,de,Vt,qe,pa,Bt,ma,qo,q,fa,Ae,ua,ga,mt,_a,Ta,Ne,va,ba,Ao,ft,wa,No,ut,Ht,$a,Lo,gt,ya,Oo,C,Rt,Da,ka,G,xa,_t,Ia,Ea,Tt,Fa,Ma,Ca,Ut,ja,Pa,Jt,za,qa,E,Aa,vt,Na,La,bt,Oa,Wa,Gt,Sa,Va,Kt,Ba,Ha,Xt,Ra,Ua,Zt,Ja,Ga,wt,Ka,Xa,Wo,ce,Za,Le,Qa,Ya,So,K,he,Qt,Oe,es,Yt,ts,Vo,j,We,os,X,as,$t,ss,rs,Se,ns,is,ls,Z,ds,yt,cs,hs,Dt,ps,ms,fs,pe,Bo,Q,me,eo,Ve,us,to,gs,Ho,P,Be,_s,oo,Ts,vs,He,bs,kt,ws,$s,ys,R,Re,Ds,ao,ks,xs,fe,Ro,Y,ue,so,Ue,Is,ro,Es,Uo,S,Je,Fs,Ge,Ms,Ke,Cs,js,Ps,A,Xe,zs,ee,qs,xt,As,Ns,no,Ls,Os,Ws,ge,Ss,_e,Jo,te,Te,io,Ze,Vs,lo,Bs,Go,V,Qe,Hs,oe,Rs,co,Us,Js,Ye,Gs,Ks,Xs,N,et,Zs,ae,Qs,It,Ys,er,ho,tr,or,ar,ve,sr,be,Ko,se,we,po,tt,rr,mo,nr,Xo,z,ot,ir,fo,lr,dr,at,cr,st,hr,pr,mr,L,rt,fr,re,ur,Et,gr,_r,uo,Tr,vr,br,$e,wr,ye,Zo,ne,De,go,nt,$r,_o,yr,Qo,F,it,Dr,To,kr,xr,vo,Ir,Er,bo,Fr,Mr,lt,Cr,dt,jr,Pr,zr,O,ct,qr,ie,Ar,Ft,Nr,Lr,wo,Or,Wr,Sr,ke,Vr,xe,Yo;return l=new ze({}),le=new St({props:{$$slots:{default:[ti]},$$scope:{ctx:x}}}),qe=new ze({}),Oe=new ze({}),We=new H({props:{name:"class transformers.DeiTConfig",anchor:"transformers.DeiTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DeiTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DeiTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DeiTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DeiTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.DeiTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DeiTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DeiTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DeiTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DeiTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.DeiTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.DeiTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.DeiTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.DeiTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/configuration_deit.py#L35"}}),pe=new Mo({props:{anchor:"transformers.DeiTConfig.example",$$slots:{default:[oi]},$$scope:{ctx:x}}}),Ve=new ze({}),Be=new H({props:{name:"class transformers.DeiTFeatureExtractor",anchor:"transformers.DeiTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 256"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.DeiTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 256) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.DeiTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.DeiTFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.DeiTFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.DeiTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.DeiTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.DeiTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/feature_extraction_deit.py#L36"}}),Re=new H({props:{name:"__call__",anchor:"transformers.DeiTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DeiTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.DeiTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.19.3/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/feature_extraction_deit.py#L91",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.3/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.3/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),fe=new St({props:{warning:!0,$$slots:{default:[ai]},$$scope:{ctx:x}}}),Ue=new ze({}),Je=new H({props:{name:"class transformers.DeiTModel",anchor:"transformers.DeiTModel",parameters:[{name:"config",val:": DeiTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DeiTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/modeling_deit.py#L472"}}),Xe=new H({props:{name:"forward",anchor:"transformers.DeiTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/modeling_deit.py#L497",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ge=new St({props:{$$slots:{default:[si]},$$scope:{ctx:x}}}),_e=new Mo({props:{anchor:"transformers.DeiTModel.forward.example",$$slots:{default:[ri]},$$scope:{ctx:x}}}),Ze=new ze({}),Qe=new H({props:{name:"class transformers.DeiTForMaskedImageModeling",anchor:"transformers.DeiTForMaskedImageModeling",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/modeling_deit.py#L576"}}),et=new H({props:{name:"forward",anchor:"transformers.DeiTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/modeling_deit.py#L590",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new St({props:{$$slots:{default:[ni]},$$scope:{ctx:x}}}),be=new Mo({props:{anchor:"transformers.DeiTForMaskedImageModeling.forward.example",$$slots:{default:[ii]},$$scope:{ctx:x}}}),tt=new ze({}),ot=new H({props:{name:"class transformers.DeiTForImageClassification",anchor:"transformers.DeiTForImageClassification",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/modeling_deit.py#L684"}}),rt=new H({props:{name:"forward",anchor:"transformers.DeiTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DeiTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/modeling_deit.py#L697",returnDescription:`
<p>A <code>transformers.modeling_outputs.ImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
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
<p><code>transformers.modeling_outputs.ImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new St({props:{$$slots:{default:[li]},$$scope:{ctx:x}}}),ye=new Mo({props:{anchor:"transformers.DeiTForImageClassification.forward.example",$$slots:{default:[di]},$$scope:{ctx:x}}}),nt=new ze({}),it=new H({props:{name:"class transformers.DeiTForImageClassificationWithTeacher",anchor:"transformers.DeiTForImageClassificationWithTeacher",parameters:[{name:"config",val:": DeiTConfig"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTConfig">DeiTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/modeling_deit.py#L833"}}),ct=new H({props:{name:"forward",anchor:"transformers.DeiTForImageClassificationWithTeacher.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor">DeiTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor.__call__">DeiTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.3/src/transformers/models/deit/modeling_deit.py#L851",returnDescription:`
<p>A <code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTConfig"
>DeiTConfig</a>) and inputs.</p>
<ul>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores as the average of the cls_logits and distillation logits.</li>
<li><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the classification head (i.e. the linear layer on top of the final hidden state of the
class token).</li>
<li><strong>distillation_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Prediction scores of the distillation head (i.e. the linear layer on top of the final hidden state of the
distillation token).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.deit.modeling_deit.DeiTForImageClassificationWithTeacherOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new St({props:{$$slots:{default:[ci]},$$scope:{ctx:x}}}),xe=new Mo({props:{anchor:"transformers.DeiTForImageClassificationWithTeacher.forward.example",$$slots:{default:[hi]},$$scope:{ctx:x}}}),{c(){d=a("meta"),v=f(),m=a("h1"),h=a("a"),T=a("span"),b(l.$$.fragment),p=f(),I=a("span"),ha=n("DeiT"),Po=f(),b(le.$$.fragment),zo=f(),J=a("h2"),de=a("a"),Vt=a("span"),b(qe.$$.fragment),pa=f(),Bt=a("span"),ma=n("Overview"),qo=f(),q=a("p"),fa=n("The DeiT model was proposed in "),Ae=a("a"),ua=n("Training data-efficient image transformers & distillation through attention"),ga=n(` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),mt=a("a"),_a=n("Vision Transformer (ViT)"),Ta=n(" introduced in "),Ne=a("a"),va=n("Dosovitskiy et al., 2020"),ba=n(` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),Ao=f(),ft=a("p"),wa=n("The abstract from the paper is the following:"),No=f(),ut=a("p"),Ht=a("em"),$a=n(`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),Lo=f(),gt=a("p"),ya=n("Tips:"),Oo=f(),C=a("ul"),Rt=a("li"),Da=n(`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),ka=f(),G=a("li"),xa=n(`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),_t=a("a"),Ia=n("DeiTForImageClassification"),Ea=n(` and (2) corresponds to
`),Tt=a("a"),Fa=n("DeiTForImageClassificationWithTeacher"),Ma=n("."),Ca=f(),Ut=a("li"),ja=n(`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Pa=f(),Jt=a("li"),za=n(`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),qa=f(),E=a("li"),Aa=n(`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),vt=a("a"),Na=n("ViTModel"),La=n(" or "),bt=a("a"),Oa=n("ViTForImageClassification"),Wa=n(`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),Gt=a("em"),Sa=n("facebook/deit-tiny-patch16-224"),Va=n(", "),Kt=a("em"),Ba=n("facebook/deit-small-patch16-224"),Ha=n(", "),Xt=a("em"),Ra=n("facebook/deit-base-patch16-224"),Ua=n(` and
`),Zt=a("em"),Ja=n("facebook/deit-base-patch16-384"),Ga=n(". Note that one should use "),wt=a("a"),Ka=n("DeiTFeatureExtractor"),Xa=n(` in order to
prepare images for the model.`),Wo=f(),ce=a("p"),Za=n("This model was contributed by "),Le=a("a"),Qa=n("nielsr"),Ya=n("."),So=f(),K=a("h2"),he=a("a"),Qt=a("span"),b(Oe.$$.fragment),es=f(),Yt=a("span"),ts=n("DeiTConfig"),Vo=f(),j=a("div"),b(We.$$.fragment),os=f(),X=a("p"),as=n("This is the configuration class to store the configuration of a "),$t=a("a"),ss=n("DeiTModel"),rs=n(`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),Se=a("a"),ns=n("facebook/deit-base-distilled-patch16-224"),is=n(`
architecture.`),ls=f(),Z=a("p"),ds=n("Configuration objects inherit from "),yt=a("a"),cs=n("PretrainedConfig"),hs=n(` and can be used to control the model outputs. Read the
documentation from `),Dt=a("a"),ps=n("PretrainedConfig"),ms=n(" for more information."),fs=f(),b(pe.$$.fragment),Bo=f(),Q=a("h2"),me=a("a"),eo=a("span"),b(Ve.$$.fragment),us=f(),to=a("span"),gs=n("DeiTFeatureExtractor"),Ho=f(),P=a("div"),b(Be.$$.fragment),_s=f(),oo=a("p"),Ts=n("Constructs a DeiT feature extractor."),vs=f(),He=a("p"),bs=n("This feature extractor inherits from "),kt=a("a"),ws=n("FeatureExtractionMixin"),$s=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ys=f(),R=a("div"),b(Re.$$.fragment),Ds=f(),ao=a("p"),ks=n("Main method to prepare for the model one or several image(s)."),xs=f(),b(fe.$$.fragment),Ro=f(),Y=a("h2"),ue=a("a"),so=a("span"),b(Ue.$$.fragment),Is=f(),ro=a("span"),Es=n("DeiTModel"),Uo=f(),S=a("div"),b(Je.$$.fragment),Fs=f(),Ge=a("p"),Ms=n(`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ke=a("a"),Cs=n("torch.nn.Module"),js=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ps=f(),A=a("div"),b(Xe.$$.fragment),zs=f(),ee=a("p"),qs=n("The "),xt=a("a"),As=n("DeiTModel"),Ns=n(" forward method, overrides the "),no=a("code"),Ls=n("__call__"),Os=n(" special method."),Ws=f(),b(ge.$$.fragment),Ss=f(),b(_e.$$.fragment),Jo=f(),te=a("h2"),Te=a("a"),io=a("span"),b(Ze.$$.fragment),Vs=f(),lo=a("span"),Bs=n("DeiTForMaskedImageModeling"),Go=f(),V=a("div"),b(Qe.$$.fragment),Hs=f(),oe=a("p"),Rs=n("DeiT Model with a decoder on top for masked image modeling, as proposed in "),co=a("code"),Us=n("SimMIM <https://arxiv.org/abs/2111.09886>"),Js=n(`__.
This model is a PyTorch `),Ye=a("a"),Gs=n("torch.nn.Module"),Ks=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xs=f(),N=a("div"),b(et.$$.fragment),Zs=f(),ae=a("p"),Qs=n("The "),It=a("a"),Ys=n("DeiTForMaskedImageModeling"),er=n(" forward method, overrides the "),ho=a("code"),tr=n("__call__"),or=n(" special method."),ar=f(),b(ve.$$.fragment),sr=f(),b(be.$$.fragment),Ko=f(),se=a("h2"),we=a("a"),po=a("span"),b(tt.$$.fragment),rr=f(),mo=a("span"),nr=n("DeiTForImageClassification"),Xo=f(),z=a("div"),b(ot.$$.fragment),ir=f(),fo=a("p"),lr=n(`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),dr=f(),at=a("p"),cr=n("This model is a PyTorch "),st=a("a"),hr=n("torch.nn.Module"),pr=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mr=f(),L=a("div"),b(rt.$$.fragment),fr=f(),re=a("p"),ur=n("The "),Et=a("a"),gr=n("DeiTForImageClassification"),_r=n(" forward method, overrides the "),uo=a("code"),Tr=n("__call__"),vr=n(" special method."),br=f(),b($e.$$.fragment),wr=f(),b(ye.$$.fragment),Zo=f(),ne=a("h2"),De=a("a"),go=a("span"),b(nt.$$.fragment),$r=f(),_o=a("span"),yr=n("DeiTForImageClassificationWithTeacher"),Qo=f(),F=a("div"),b(it.$$.fragment),Dr=f(),To=a("p"),kr=n(`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),xr=f(),vo=a("p"),Ir=n(".. warning::"),Er=f(),bo=a("p"),Fr=n(`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Mr=f(),lt=a("p"),Cr=n("This model is a PyTorch "),dt=a("a"),jr=n("torch.nn.Module"),Pr=n(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zr=f(),O=a("div"),b(ct.$$.fragment),qr=f(),ie=a("p"),Ar=n("The "),Ft=a("a"),Nr=n("DeiTForImageClassificationWithTeacher"),Lr=n(" forward method, overrides the "),wo=a("code"),Or=n("__call__"),Wr=n(" special method."),Sr=f(),b(ke.$$.fragment),Vr=f(),b(xe.$$.fragment),this.h()},l(t){const g=Yn('[data-svelte="svelte-1phssyn"]',document.head);d=s(g,"META",{name:!0,content:!0}),g.forEach(o),v=u(t),m=s(t,"H1",{class:!0});var ht=r(m);h=s(ht,"A",{id:!0,class:!0,href:!0});var $o=r(h);T=s($o,"SPAN",{});var yo=r(T);w(l.$$.fragment,yo),yo.forEach(o),$o.forEach(o),p=u(ht),I=s(ht,"SPAN",{});var Do=r(I);ha=i(Do,"DeiT"),Do.forEach(o),ht.forEach(o),Po=u(t),w(le.$$.fragment,t),zo=u(t),J=s(t,"H2",{class:!0});var pt=r(J);de=s(pt,"A",{id:!0,class:!0,href:!0});var ko=r(de);Vt=s(ko,"SPAN",{});var xo=r(Vt);w(qe.$$.fragment,xo),xo.forEach(o),ko.forEach(o),pa=u(pt),Bt=s(pt,"SPAN",{});var Io=r(Bt);ma=i(Io,"Overview"),Io.forEach(o),pt.forEach(o),qo=u(t),q=s(t,"P",{});var B=r(q);fa=i(B,"The DeiT model was proposed in "),Ae=s(B,"A",{href:!0,rel:!0});var Eo=r(Ae);ua=i(Eo,"Training data-efficient image transformers & distillation through attention"),Eo.forEach(o),ga=i(B,` by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre
Sablayrolles, Herv\xE9 J\xE9gou. The `),mt=s(B,"A",{href:!0});var Fo=r(mt);_a=i(Fo,"Vision Transformer (ViT)"),Fo.forEach(o),Ta=i(B," introduced in "),Ne=s(B,"A",{href:!0,rel:!0});var Br=r(Ne);va=i(Br,"Dosovitskiy et al., 2020"),Br.forEach(o),ba=i(B,` has shown that one can match or even outperform existing convolutional neural
networks using a Transformer encoder (BERT-like). However, the ViT models introduced in that paper required training on
expensive infrastructure for multiple weeks, using external data. DeiT (data-efficient image transformers) are more
efficiently trained transformers for image classification, requiring far less data and far less computing resources
compared to the original ViT models.`),B.forEach(o),Ao=u(t),ft=s(t,"P",{});var Hr=r(ft);wa=i(Hr,"The abstract from the paper is the following:"),Hr.forEach(o),No=u(t),ut=s(t,"P",{});var Rr=r(ut);Ht=s(Rr,"EM",{});var Ur=r(Ht);$a=i(Ur,`Recently, neural networks purely based on attention were shown to address image understanding tasks such as image
classification. However, these visual transformers are pre-trained with hundreds of millions of images using an
expensive infrastructure, thereby limiting their adoption. In this work, we produce a competitive convolution-free
transformer by training on Imagenet only. We train them on a single computer in less than 3 days. Our reference vision
transformer (86M parameters) achieves top-1 accuracy of 83.1% (single-crop evaluation) on ImageNet with no external
data. More importantly, we introduce a teacher-student strategy specific to transformers. It relies on a distillation
token ensuring that the student learns from the teacher through attention. We show the interest of this token-based
distillation, especially when using a convnet as a teacher. This leads us to report results competitive with convnets
for both Imagenet (where we obtain up to 85.2% accuracy) and when transferring to other tasks. We share our code and
models.`),Ur.forEach(o),Rr.forEach(o),Lo=u(t),gt=s(t,"P",{});var Jr=r(gt);ya=i(Jr,"Tips:"),Jr.forEach(o),Oo=u(t),C=s(t,"UL",{});var U=r(C);Rt=s(U,"LI",{});var Gr=r(Rt);Da=i(Gr,`Compared to ViT, DeiT models use a so-called distillation token to effectively learn from a teacher (which, in the
DeiT paper, is a ResNet like-model). The distillation token is learned through backpropagation, by interacting with
the class ([CLS]) and patch tokens through the self-attention layers.`),Gr.forEach(o),ka=u(U),G=s(U,"LI",{});var Mt=r(G);xa=i(Mt,`There are 2 ways to fine-tune distilled models, either (1) in a classic way, by only placing a prediction head on top
of the final hidden state of the class token and not using the distillation signal, or (2) by placing both a
prediction head on top of the class token and on top of the distillation token. In that case, the [CLS] prediction
head is trained using regular cross-entropy between the prediction of the head and the ground-truth label, while the
distillation prediction head is trained using hard distillation (cross-entropy between the prediction of the
distillation head and the label predicted by the teacher). At inference time, one takes the average prediction
between both heads as final prediction. (2) is also called \u201Cfine-tuning with distillation\u201D, because one relies on a
teacher that has already been fine-tuned on the downstream dataset. In terms of models, (1) corresponds to
`),_t=s(Mt,"A",{href:!0});var Kr=r(_t);Ia=i(Kr,"DeiTForImageClassification"),Kr.forEach(o),Ea=i(Mt,` and (2) corresponds to
`),Tt=s(Mt,"A",{href:!0});var Xr=r(Tt);Fa=i(Xr,"DeiTForImageClassificationWithTeacher"),Xr.forEach(o),Ma=i(Mt,"."),Mt.forEach(o),Ca=u(U),Ut=s(U,"LI",{});var Zr=r(Ut);ja=i(Zr,`Note that the authors also did try soft distillation for (2) (in which case the distillation prediction head is
trained using KL divergence to match the softmax output of the teacher), but hard distillation gave the best results.`),Zr.forEach(o),Pa=u(U),Jt=s(U,"LI",{});var Qr=r(Jt);za=i(Qr,`All released checkpoints were pre-trained and fine-tuned on ImageNet-1k only. No external data was used. This is in
contrast with the original ViT model, which used external data like the JFT-300M dataset/Imagenet-21k for
pre-training.`),Qr.forEach(o),qa=u(U),E=s(U,"LI",{});var M=r(E);Aa=i(M,`The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into
`),vt=s(M,"A",{href:!0});var Yr=r(vt);Na=i(Yr,"ViTModel"),Yr.forEach(o),La=i(M," or "),bt=s(M,"A",{href:!0});var en=r(bt);Oa=i(en,"ViTForImageClassification"),en.forEach(o),Wa=i(M,`. Techniques like data
augmentation, optimization, and regularization were used in order to simulate training on a much larger dataset
(while only using ImageNet-1k for pre-training). There are 4 variants available (in 3 different sizes):
`),Gt=s(M,"EM",{});var tn=r(Gt);Sa=i(tn,"facebook/deit-tiny-patch16-224"),tn.forEach(o),Va=i(M,", "),Kt=s(M,"EM",{});var on=r(Kt);Ba=i(on,"facebook/deit-small-patch16-224"),on.forEach(o),Ha=i(M,", "),Xt=s(M,"EM",{});var an=r(Xt);Ra=i(an,"facebook/deit-base-patch16-224"),an.forEach(o),Ua=i(M,` and
`),Zt=s(M,"EM",{});var sn=r(Zt);Ja=i(sn,"facebook/deit-base-patch16-384"),sn.forEach(o),Ga=i(M,". Note that one should use "),wt=s(M,"A",{href:!0});var rn=r(wt);Ka=i(rn,"DeiTFeatureExtractor"),rn.forEach(o),Xa=i(M,` in order to
prepare images for the model.`),M.forEach(o),U.forEach(o),Wo=u(t),ce=s(t,"P",{});var ea=r(ce);Za=i(ea,"This model was contributed by "),Le=s(ea,"A",{href:!0,rel:!0});var nn=r(Le);Qa=i(nn,"nielsr"),nn.forEach(o),Ya=i(ea,"."),ea.forEach(o),So=u(t),K=s(t,"H2",{class:!0});var ta=r(K);he=s(ta,"A",{id:!0,class:!0,href:!0});var ln=r(he);Qt=s(ln,"SPAN",{});var dn=r(Qt);w(Oe.$$.fragment,dn),dn.forEach(o),ln.forEach(o),es=u(ta),Yt=s(ta,"SPAN",{});var cn=r(Yt);ts=i(cn,"DeiTConfig"),cn.forEach(o),ta.forEach(o),Vo=u(t),j=s(t,"DIV",{class:!0});var Ie=r(j);w(We.$$.fragment,Ie),os=u(Ie),X=s(Ie,"P",{});var Ct=r(X);as=i(Ct,"This is the configuration class to store the configuration of a "),$t=s(Ct,"A",{href:!0});var hn=r($t);ss=i(hn,"DeiTModel"),hn.forEach(o),rs=i(Ct,`. It is used to instantiate an DeiT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DeiT
`),Se=s(Ct,"A",{href:!0,rel:!0});var pn=r(Se);ns=i(pn,"facebook/deit-base-distilled-patch16-224"),pn.forEach(o),is=i(Ct,`
architecture.`),Ct.forEach(o),ls=u(Ie),Z=s(Ie,"P",{});var jt=r(Z);ds=i(jt,"Configuration objects inherit from "),yt=s(jt,"A",{href:!0});var mn=r(yt);cs=i(mn,"PretrainedConfig"),mn.forEach(o),hs=i(jt,` and can be used to control the model outputs. Read the
documentation from `),Dt=s(jt,"A",{href:!0});var fn=r(Dt);ps=i(fn,"PretrainedConfig"),fn.forEach(o),ms=i(jt," for more information."),jt.forEach(o),fs=u(Ie),w(pe.$$.fragment,Ie),Ie.forEach(o),Bo=u(t),Q=s(t,"H2",{class:!0});var oa=r(Q);me=s(oa,"A",{id:!0,class:!0,href:!0});var un=r(me);eo=s(un,"SPAN",{});var gn=r(eo);w(Ve.$$.fragment,gn),gn.forEach(o),un.forEach(o),us=u(oa),to=s(oa,"SPAN",{});var _n=r(to);gs=i(_n,"DeiTFeatureExtractor"),_n.forEach(o),oa.forEach(o),Ho=u(t),P=s(t,"DIV",{class:!0});var Ee=r(P);w(Be.$$.fragment,Ee),_s=u(Ee),oo=s(Ee,"P",{});var Tn=r(oo);Ts=i(Tn,"Constructs a DeiT feature extractor."),Tn.forEach(o),vs=u(Ee),He=s(Ee,"P",{});var aa=r(He);bs=i(aa,"This feature extractor inherits from "),kt=s(aa,"A",{href:!0});var vn=r(kt);ws=i(vn,"FeatureExtractionMixin"),vn.forEach(o),$s=i(aa,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),aa.forEach(o),ys=u(Ee),R=s(Ee,"DIV",{class:!0});var Pt=r(R);w(Re.$$.fragment,Pt),Ds=u(Pt),ao=s(Pt,"P",{});var bn=r(ao);ks=i(bn,"Main method to prepare for the model one or several image(s)."),bn.forEach(o),xs=u(Pt),w(fe.$$.fragment,Pt),Pt.forEach(o),Ee.forEach(o),Ro=u(t),Y=s(t,"H2",{class:!0});var sa=r(Y);ue=s(sa,"A",{id:!0,class:!0,href:!0});var wn=r(ue);so=s(wn,"SPAN",{});var $n=r(so);w(Ue.$$.fragment,$n),$n.forEach(o),wn.forEach(o),Is=u(sa),ro=s(sa,"SPAN",{});var yn=r(ro);Es=i(yn,"DeiTModel"),yn.forEach(o),sa.forEach(o),Uo=u(t),S=s(t,"DIV",{class:!0});var zt=r(S);w(Je.$$.fragment,zt),Fs=u(zt),Ge=s(zt,"P",{});var ra=r(Ge);Ms=i(ra,`The bare DeiT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ke=s(ra,"A",{href:!0,rel:!0});var Dn=r(Ke);Cs=i(Dn,"torch.nn.Module"),Dn.forEach(o),js=i(ra,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ra.forEach(o),Ps=u(zt),A=s(zt,"DIV",{class:!0});var Fe=r(A);w(Xe.$$.fragment,Fe),zs=u(Fe),ee=s(Fe,"P",{});var qt=r(ee);qs=i(qt,"The "),xt=s(qt,"A",{href:!0});var kn=r(xt);As=i(kn,"DeiTModel"),kn.forEach(o),Ns=i(qt," forward method, overrides the "),no=s(qt,"CODE",{});var xn=r(no);Ls=i(xn,"__call__"),xn.forEach(o),Os=i(qt," special method."),qt.forEach(o),Ws=u(Fe),w(ge.$$.fragment,Fe),Ss=u(Fe),w(_e.$$.fragment,Fe),Fe.forEach(o),zt.forEach(o),Jo=u(t),te=s(t,"H2",{class:!0});var na=r(te);Te=s(na,"A",{id:!0,class:!0,href:!0});var In=r(Te);io=s(In,"SPAN",{});var En=r(io);w(Ze.$$.fragment,En),En.forEach(o),In.forEach(o),Vs=u(na),lo=s(na,"SPAN",{});var Fn=r(lo);Bs=i(Fn,"DeiTForMaskedImageModeling"),Fn.forEach(o),na.forEach(o),Go=u(t),V=s(t,"DIV",{class:!0});var At=r(V);w(Qe.$$.fragment,At),Hs=u(At),oe=s(At,"P",{});var Nt=r(oe);Rs=i(Nt,"DeiT Model with a decoder on top for masked image modeling, as proposed in "),co=s(Nt,"CODE",{});var Mn=r(co);Us=i(Mn,"SimMIM <https://arxiv.org/abs/2111.09886>"),Mn.forEach(o),Js=i(Nt,`__.
This model is a PyTorch `),Ye=s(Nt,"A",{href:!0,rel:!0});var Cn=r(Ye);Gs=i(Cn,"torch.nn.Module"),Cn.forEach(o),Ks=i(Nt,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nt.forEach(o),Xs=u(At),N=s(At,"DIV",{class:!0});var Me=r(N);w(et.$$.fragment,Me),Zs=u(Me),ae=s(Me,"P",{});var Lt=r(ae);Qs=i(Lt,"The "),It=s(Lt,"A",{href:!0});var jn=r(It);Ys=i(jn,"DeiTForMaskedImageModeling"),jn.forEach(o),er=i(Lt," forward method, overrides the "),ho=s(Lt,"CODE",{});var Pn=r(ho);tr=i(Pn,"__call__"),Pn.forEach(o),or=i(Lt," special method."),Lt.forEach(o),ar=u(Me),w(ve.$$.fragment,Me),sr=u(Me),w(be.$$.fragment,Me),Me.forEach(o),At.forEach(o),Ko=u(t),se=s(t,"H2",{class:!0});var ia=r(se);we=s(ia,"A",{id:!0,class:!0,href:!0});var zn=r(we);po=s(zn,"SPAN",{});var qn=r(po);w(tt.$$.fragment,qn),qn.forEach(o),zn.forEach(o),rr=u(ia),mo=s(ia,"SPAN",{});var An=r(mo);nr=i(An,"DeiTForImageClassification"),An.forEach(o),ia.forEach(o),Xo=u(t),z=s(t,"DIV",{class:!0});var Ce=r(z);w(ot.$$.fragment,Ce),ir=u(Ce),fo=s(Ce,"P",{});var Nn=r(fo);lr=i(Nn,`DeiT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Nn.forEach(o),dr=u(Ce),at=s(Ce,"P",{});var la=r(at);cr=i(la,"This model is a PyTorch "),st=s(la,"A",{href:!0,rel:!0});var Ln=r(st);hr=i(Ln,"torch.nn.Module"),Ln.forEach(o),pr=i(la,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),la.forEach(o),mr=u(Ce),L=s(Ce,"DIV",{class:!0});var je=r(L);w(rt.$$.fragment,je),fr=u(je),re=s(je,"P",{});var Ot=r(re);ur=i(Ot,"The "),Et=s(Ot,"A",{href:!0});var On=r(Et);gr=i(On,"DeiTForImageClassification"),On.forEach(o),_r=i(Ot," forward method, overrides the "),uo=s(Ot,"CODE",{});var Wn=r(uo);Tr=i(Wn,"__call__"),Wn.forEach(o),vr=i(Ot," special method."),Ot.forEach(o),br=u(je),w($e.$$.fragment,je),wr=u(je),w(ye.$$.fragment,je),je.forEach(o),Ce.forEach(o),Zo=u(t),ne=s(t,"H2",{class:!0});var da=r(ne);De=s(da,"A",{id:!0,class:!0,href:!0});var Sn=r(De);go=s(Sn,"SPAN",{});var Vn=r(go);w(nt.$$.fragment,Vn),Vn.forEach(o),Sn.forEach(o),$r=u(da),_o=s(da,"SPAN",{});var Bn=r(_o);yr=i(Bn,"DeiTForImageClassificationWithTeacher"),Bn.forEach(o),da.forEach(o),Qo=u(t),F=s(t,"DIV",{class:!0});var W=r(F);w(it.$$.fragment,W),Dr=u(W),To=s(W,"P",{});var Hn=r(To);kr=i(Hn,`DeiT Model transformer with image classification heads on top (a linear layer on top of the final hidden state of
the [CLS] token and a linear layer on top of the final hidden state of the distillation token) e.g. for ImageNet.`),Hn.forEach(o),xr=u(W),vo=s(W,"P",{});var Rn=r(vo);Ir=i(Rn,".. warning::"),Rn.forEach(o),Er=u(W),bo=s(W,"P",{});var Un=r(bo);Fr=i(Un,`This model supports inference-only. Fine-tuning with distillation (i.e. with a teacher) is not yet
supported.`),Un.forEach(o),Mr=u(W),lt=s(W,"P",{});var ca=r(lt);Cr=i(ca,"This model is a PyTorch "),dt=s(ca,"A",{href:!0,rel:!0});var Jn=r(dt);jr=i(Jn,"torch.nn.Module"),Jn.forEach(o),Pr=i(ca,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ca.forEach(o),zr=u(W),O=s(W,"DIV",{class:!0});var Pe=r(O);w(ct.$$.fragment,Pe),qr=u(Pe),ie=s(Pe,"P",{});var Wt=r(ie);Ar=i(Wt,"The "),Ft=s(Wt,"A",{href:!0});var Gn=r(Ft);Nr=i(Gn,"DeiTForImageClassificationWithTeacher"),Gn.forEach(o),Lr=i(Wt," forward method, overrides the "),wo=s(Wt,"CODE",{});var Kn=r(wo);Or=i(Kn,"__call__"),Kn.forEach(o),Wr=i(Wt," special method."),Wt.forEach(o),Sr=u(Pe),w(ke.$$.fragment,Pe),Vr=u(Pe),w(xe.$$.fragment,Pe),Pe.forEach(o),W.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(mi)),c(h,"id","deit"),c(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(h,"href","#deit"),c(m,"class","relative group"),c(de,"id","overview"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#overview"),c(J,"class","relative group"),c(Ae,"href","https://arxiv.org/abs/2012.12877"),c(Ae,"rel","nofollow"),c(mt,"href","vit"),c(Ne,"href","https://arxiv.org/abs/2010.11929"),c(Ne,"rel","nofollow"),c(_t,"href","/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTForImageClassification"),c(Tt,"href","/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),c(vt,"href","/docs/transformers/v4.19.3/en/model_doc/vit#transformers.ViTModel"),c(bt,"href","/docs/transformers/v4.19.3/en/model_doc/vit#transformers.ViTForImageClassification"),c(wt,"href","/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTFeatureExtractor"),c(Le,"href","https://huggingface.co/nielsr"),c(Le,"rel","nofollow"),c(he,"id","transformers.DeiTConfig"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#transformers.DeiTConfig"),c(K,"class","relative group"),c($t,"href","/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTModel"),c(Se,"href","https://huggingface.co/facebook/deit-base-distilled-patch16-224"),c(Se,"rel","nofollow"),c(yt,"href","/docs/transformers/v4.19.3/en/main_classes/configuration#transformers.PretrainedConfig"),c(Dt,"href","/docs/transformers/v4.19.3/en/main_classes/configuration#transformers.PretrainedConfig"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"id","transformers.DeiTFeatureExtractor"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#transformers.DeiTFeatureExtractor"),c(Q,"class","relative group"),c(kt,"href","/docs/transformers/v4.19.3/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ue,"id","transformers.DeiTModel"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#transformers.DeiTModel"),c(Y,"class","relative group"),c(Ke,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ke,"rel","nofollow"),c(xt,"href","/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTModel"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.DeiTForMaskedImageModeling"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DeiTForMaskedImageModeling"),c(te,"class","relative group"),c(Ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ye,"rel","nofollow"),c(It,"href","/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTForMaskedImageModeling"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(we,"id","transformers.DeiTForImageClassification"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.DeiTForImageClassification"),c(se,"class","relative group"),c(st,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(st,"rel","nofollow"),c(Et,"href","/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTForImageClassification"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(De,"id","transformers.DeiTForImageClassificationWithTeacher"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#transformers.DeiTForImageClassificationWithTeacher"),c(ne,"class","relative group"),c(dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(dt,"rel","nofollow"),c(Ft,"href","/docs/transformers/v4.19.3/en/model_doc/deit#transformers.DeiTForImageClassificationWithTeacher"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),_(t,v,g),_(t,m,g),e(m,h),e(h,T),$(l,T,null),e(m,p),e(m,I),e(I,ha),_(t,Po,g),$(le,t,g),_(t,zo,g),_(t,J,g),e(J,de),e(de,Vt),$(qe,Vt,null),e(J,pa),e(J,Bt),e(Bt,ma),_(t,qo,g),_(t,q,g),e(q,fa),e(q,Ae),e(Ae,ua),e(q,ga),e(q,mt),e(mt,_a),e(q,Ta),e(q,Ne),e(Ne,va),e(q,ba),_(t,Ao,g),_(t,ft,g),e(ft,wa),_(t,No,g),_(t,ut,g),e(ut,Ht),e(Ht,$a),_(t,Lo,g),_(t,gt,g),e(gt,ya),_(t,Oo,g),_(t,C,g),e(C,Rt),e(Rt,Da),e(C,ka),e(C,G),e(G,xa),e(G,_t),e(_t,Ia),e(G,Ea),e(G,Tt),e(Tt,Fa),e(G,Ma),e(C,Ca),e(C,Ut),e(Ut,ja),e(C,Pa),e(C,Jt),e(Jt,za),e(C,qa),e(C,E),e(E,Aa),e(E,vt),e(vt,Na),e(E,La),e(E,bt),e(bt,Oa),e(E,Wa),e(E,Gt),e(Gt,Sa),e(E,Va),e(E,Kt),e(Kt,Ba),e(E,Ha),e(E,Xt),e(Xt,Ra),e(E,Ua),e(E,Zt),e(Zt,Ja),e(E,Ga),e(E,wt),e(wt,Ka),e(E,Xa),_(t,Wo,g),_(t,ce,g),e(ce,Za),e(ce,Le),e(Le,Qa),e(ce,Ya),_(t,So,g),_(t,K,g),e(K,he),e(he,Qt),$(Oe,Qt,null),e(K,es),e(K,Yt),e(Yt,ts),_(t,Vo,g),_(t,j,g),$(We,j,null),e(j,os),e(j,X),e(X,as),e(X,$t),e($t,ss),e(X,rs),e(X,Se),e(Se,ns),e(X,is),e(j,ls),e(j,Z),e(Z,ds),e(Z,yt),e(yt,cs),e(Z,hs),e(Z,Dt),e(Dt,ps),e(Z,ms),e(j,fs),$(pe,j,null),_(t,Bo,g),_(t,Q,g),e(Q,me),e(me,eo),$(Ve,eo,null),e(Q,us),e(Q,to),e(to,gs),_(t,Ho,g),_(t,P,g),$(Be,P,null),e(P,_s),e(P,oo),e(oo,Ts),e(P,vs),e(P,He),e(He,bs),e(He,kt),e(kt,ws),e(He,$s),e(P,ys),e(P,R),$(Re,R,null),e(R,Ds),e(R,ao),e(ao,ks),e(R,xs),$(fe,R,null),_(t,Ro,g),_(t,Y,g),e(Y,ue),e(ue,so),$(Ue,so,null),e(Y,Is),e(Y,ro),e(ro,Es),_(t,Uo,g),_(t,S,g),$(Je,S,null),e(S,Fs),e(S,Ge),e(Ge,Ms),e(Ge,Ke),e(Ke,Cs),e(Ge,js),e(S,Ps),e(S,A),$(Xe,A,null),e(A,zs),e(A,ee),e(ee,qs),e(ee,xt),e(xt,As),e(ee,Ns),e(ee,no),e(no,Ls),e(ee,Os),e(A,Ws),$(ge,A,null),e(A,Ss),$(_e,A,null),_(t,Jo,g),_(t,te,g),e(te,Te),e(Te,io),$(Ze,io,null),e(te,Vs),e(te,lo),e(lo,Bs),_(t,Go,g),_(t,V,g),$(Qe,V,null),e(V,Hs),e(V,oe),e(oe,Rs),e(oe,co),e(co,Us),e(oe,Js),e(oe,Ye),e(Ye,Gs),e(oe,Ks),e(V,Xs),e(V,N),$(et,N,null),e(N,Zs),e(N,ae),e(ae,Qs),e(ae,It),e(It,Ys),e(ae,er),e(ae,ho),e(ho,tr),e(ae,or),e(N,ar),$(ve,N,null),e(N,sr),$(be,N,null),_(t,Ko,g),_(t,se,g),e(se,we),e(we,po),$(tt,po,null),e(se,rr),e(se,mo),e(mo,nr),_(t,Xo,g),_(t,z,g),$(ot,z,null),e(z,ir),e(z,fo),e(fo,lr),e(z,dr),e(z,at),e(at,cr),e(at,st),e(st,hr),e(at,pr),e(z,mr),e(z,L),$(rt,L,null),e(L,fr),e(L,re),e(re,ur),e(re,Et),e(Et,gr),e(re,_r),e(re,uo),e(uo,Tr),e(re,vr),e(L,br),$($e,L,null),e(L,wr),$(ye,L,null),_(t,Zo,g),_(t,ne,g),e(ne,De),e(De,go),$(nt,go,null),e(ne,$r),e(ne,_o),e(_o,yr),_(t,Qo,g),_(t,F,g),$(it,F,null),e(F,Dr),e(F,To),e(To,kr),e(F,xr),e(F,vo),e(vo,Ir),e(F,Er),e(F,bo),e(bo,Fr),e(F,Mr),e(F,lt),e(lt,Cr),e(lt,dt),e(dt,jr),e(lt,Pr),e(F,zr),e(F,O),$(ct,O,null),e(O,qr),e(O,ie),e(ie,Ar),e(ie,Ft),e(Ft,Nr),e(ie,Lr),e(ie,wo),e(wo,Or),e(ie,Wr),e(O,Sr),$(ke,O,null),e(O,Vr),$(xe,O,null),Yo=!0},p(t,[g]){const ht={};g&2&&(ht.$$scope={dirty:g,ctx:t}),le.$set(ht);const $o={};g&2&&($o.$$scope={dirty:g,ctx:t}),pe.$set($o);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:t}),fe.$set(yo);const Do={};g&2&&(Do.$$scope={dirty:g,ctx:t}),ge.$set(Do);const pt={};g&2&&(pt.$$scope={dirty:g,ctx:t}),_e.$set(pt);const ko={};g&2&&(ko.$$scope={dirty:g,ctx:t}),ve.$set(ko);const xo={};g&2&&(xo.$$scope={dirty:g,ctx:t}),be.$set(xo);const Io={};g&2&&(Io.$$scope={dirty:g,ctx:t}),$e.$set(Io);const B={};g&2&&(B.$$scope={dirty:g,ctx:t}),ye.$set(B);const Eo={};g&2&&(Eo.$$scope={dirty:g,ctx:t}),ke.$set(Eo);const Fo={};g&2&&(Fo.$$scope={dirty:g,ctx:t}),xe.$set(Fo)},i(t){Yo||(y(l.$$.fragment,t),y(le.$$.fragment,t),y(qe.$$.fragment,t),y(Oe.$$.fragment,t),y(We.$$.fragment,t),y(pe.$$.fragment,t),y(Ve.$$.fragment,t),y(Be.$$.fragment,t),y(Re.$$.fragment,t),y(fe.$$.fragment,t),y(Ue.$$.fragment,t),y(Je.$$.fragment,t),y(Xe.$$.fragment,t),y(ge.$$.fragment,t),y(_e.$$.fragment,t),y(Ze.$$.fragment,t),y(Qe.$$.fragment,t),y(et.$$.fragment,t),y(ve.$$.fragment,t),y(be.$$.fragment,t),y(tt.$$.fragment,t),y(ot.$$.fragment,t),y(rt.$$.fragment,t),y($e.$$.fragment,t),y(ye.$$.fragment,t),y(nt.$$.fragment,t),y(it.$$.fragment,t),y(ct.$$.fragment,t),y(ke.$$.fragment,t),y(xe.$$.fragment,t),Yo=!0)},o(t){D(l.$$.fragment,t),D(le.$$.fragment,t),D(qe.$$.fragment,t),D(Oe.$$.fragment,t),D(We.$$.fragment,t),D(pe.$$.fragment,t),D(Ve.$$.fragment,t),D(Be.$$.fragment,t),D(Re.$$.fragment,t),D(fe.$$.fragment,t),D(Ue.$$.fragment,t),D(Je.$$.fragment,t),D(Xe.$$.fragment,t),D(ge.$$.fragment,t),D(_e.$$.fragment,t),D(Ze.$$.fragment,t),D(Qe.$$.fragment,t),D(et.$$.fragment,t),D(ve.$$.fragment,t),D(be.$$.fragment,t),D(tt.$$.fragment,t),D(ot.$$.fragment,t),D(rt.$$.fragment,t),D($e.$$.fragment,t),D(ye.$$.fragment,t),D(nt.$$.fragment,t),D(it.$$.fragment,t),D(ct.$$.fragment,t),D(ke.$$.fragment,t),D(xe.$$.fragment,t),Yo=!1},d(t){o(d),t&&o(v),t&&o(m),k(l),t&&o(Po),k(le,t),t&&o(zo),t&&o(J),k(qe),t&&o(qo),t&&o(q),t&&o(Ao),t&&o(ft),t&&o(No),t&&o(ut),t&&o(Lo),t&&o(gt),t&&o(Oo),t&&o(C),t&&o(Wo),t&&o(ce),t&&o(So),t&&o(K),k(Oe),t&&o(Vo),t&&o(j),k(We),k(pe),t&&o(Bo),t&&o(Q),k(Ve),t&&o(Ho),t&&o(P),k(Be),k(Re),k(fe),t&&o(Ro),t&&o(Y),k(Ue),t&&o(Uo),t&&o(S),k(Je),k(Xe),k(ge),k(_e),t&&o(Jo),t&&o(te),k(Ze),t&&o(Go),t&&o(V),k(Qe),k(et),k(ve),k(be),t&&o(Ko),t&&o(se),k(tt),t&&o(Xo),t&&o(z),k(ot),k(rt),k($e),k(ye),t&&o(Zo),t&&o(ne),k(nt),t&&o(Qo),t&&o(F),k(it),k(ct),k(ke),k(xe)}}}const mi={local:"deit",sections:[{local:"overview",title:"Overview"},{local:"transformers.DeiTConfig",title:"DeiTConfig"},{local:"transformers.DeiTFeatureExtractor",title:"DeiTFeatureExtractor"},{local:"transformers.DeiTModel",title:"DeiTModel"},{local:"transformers.DeiTForMaskedImageModeling",title:"DeiTForMaskedImageModeling"},{local:"transformers.DeiTForImageClassification",title:"DeiTForImageClassification"},{local:"transformers.DeiTForImageClassificationWithTeacher",title:"DeiTForImageClassificationWithTeacher"}],title:"DeiT"};function fi(x){return ei(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wi extends Xn{constructor(d){super();Zn(this,d,fi,pi,Qn,{})}}export{wi as default,mi as metadata};
